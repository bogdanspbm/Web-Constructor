import {Div} from "../elements/dom/DOM.js";
import {Toolbar} from "../widgets/toolbar/Toolbar.js";
import {Details} from "../widgets/details/Details.js";
import {Grid} from "../grid/Grid.js";
import {Header} from "../widgets/header/Header.js";

export class App {
    constructor() {
        this.root = document.getElementById("root");
        this.bindGlobalFunctions();
        this.bindMouseMoveEvent();
        this.generateConstructor();
        //this.createCanvasComponent();
    }

    createCanvasComponent() {
        document.canvas = new CanvasComponent();
    }

    addSelectListener(listener) {
        document.selectListeners.push(listener);
    }

    addMouseMoveListener(listener) {
        document.mouseMoveListeners.push(listener);
    }

    addPageListener(listener) {
        document.pageListeners.push(listener)
    }

    // TODO: Мне не нравится что логика ресайза находится в App
    bindMouseMoveEvent() {
        this.root.addEventListener("mousemove", this.notifyMouseMoveListener);
        this.root.addEventListener("mouseup", this.notifyMouseUpListener);

        this.root.addEventListener("mouseup", function (event) {
            document.resizing = undefined;
            document.resizer = undefined;
            document.draggable = undefined;
        });
    }

    notifySelectListeners(item) {
        for (let i = 0; i < document.selectListeners.length; i++) {
            const listener = document.selectListeners[i];
            if (typeof listener.selectNotify === "function") {
                listener.selectNotify(item);
            }
        }
    }

    notifyMouseMoveListener(event) {
        for (let i = 0; i < document.mouseMoveListeners.length; i++) {
            const listener = document.mouseMoveListeners[i];
            if (typeof listener.mouseMoveNotify === "function") {
                listener.mouseMoveNotify(event);
            }
        }
    }

    notifyPageChangeListener(event) {
        for (let i = 0; i < document.pageListeners.length; i++) {
            const listener = document.pageListeners[i];
            if (typeof listener.pageChangeNotify === "function") {
                listener.pageChangeNotify(event);
            }
        }
    }

    notifyPageCreateListener(event) {
        for (let i = 0; i < document.pageListeners.length; i++) {
            const listener = document.pageListeners[i];
            if (typeof listener.pageCreateNotify === "function") {
                listener.pageCreateNotify(event);
            }
        }
    }

    notifyMouseUpListener(event) {
        for (let i = 0; i < document.mouseMoveListeners.length; i++) {
            const listener = document.mouseMoveListeners[i];
            if (typeof listener.mouseUpNotify === "function") {
                listener.mouseUpNotify(event);
            }
        }
    }


    bindGlobalFunctions() {
        const parent = this;
        document.select = function (item) {
            if (document.selected !== undefined) {
                document.selected.setSelected(false);
            }
            item.setSelected(true);
            document.selected = item;
            parent.notifySelectListeners(item);
        };

        document.pages = [];

        document.openPage = function (page) {
            document.page = page
            document.grid = page.getGrid()
            parent.panelDOM.removeChild(parent.panelDOM.children[1])
            parent.panelDOM.insertBefore(document.grid.getDOM(), parent.panelDOM.children[1]);
            parent.notifyPageChangeListener(page)
        }

        document.updatePage = function (page) {
            document.pages[page.uid] = page
            parent.notifyPageChangeListener(page)
        }

        document.createPage = function (page) {
            document.pages[page.uid] = page
            parent.notifyPageCreateListener(page)
        }

        document.selectListeners = [];
        document.addSelectListener = this.addSelectListener;

        document.mouseMoveListeners = [];
        document.addMouseListener = this.addMouseMoveListener;

        document.pageListeners = [];
        document.addPageListener = this.addPageListener;

        document.idCounter = 0;
        document.getID = function () {
            document.idCounter += 1;
            return document.idCounter;
        };
    }


    generateConstructor() {
        this.header = new Header();
        this.root.append(this.header.getDOM());

        document.toolbar = new Toolbar();
        document.grid = new Grid().setStyle("grid").setID("canvas");
        document.details = new Details();

        this.panel = new Div([
            document.toolbar,
            document.grid,
            document.details,
        ]).setStyle("container");
        this.panelDOM = this.panel.getDOM()
        this.root.append(this.panelDOM);
    }
}
