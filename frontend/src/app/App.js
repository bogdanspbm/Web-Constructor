import {Div, Grid} from "../elements/dom/DOM.js";
import {Toolbar} from "../widgets/toolbar/Toolbar.js";
import {CanvasComponent} from "../canvas/objects/canvas/Canvas.js";
import {Details} from "../widgets/details/Details.js";

export class App {

    constructor() {
        this.root = document.getElementById("root");
        this.bindGlobalFunctions()
        this.generateConstructor();
        //this.createCanvasComponent();
    }

    createCanvasComponent() {
        document.canvas = new CanvasComponent();
    }

    addSelectListener(listener) {
        document.selectListeners.push(listener)
    }

    notifySelectListeners(item) {
        for (let i = 0; i < document.selectListeners.length; i++) {
            const listener = document.selectListeners[i]
            if (typeof listener.selectNotify === "function") {
                listener.selectNotify(item)
            }
        }
    }

    bindGlobalFunctions() {
        const parent = this
        document.select = function (item) {
            if (document.selected !== undefined) {
                document.selected.setSelect(false)
            }
            item.setSelect(true)
            document.selected = item
            parent.notifySelectListeners(item)
        }

        document.selectListeners = []
        document.addSelectListener = this.addSelectListener

        document.idCounter = 0;
        document.getID = function () {
            document.idCounter += 1
            return document.idCounter
        }
    }


    generateConstructor() {
        this.header = new Div().setStyle("header").setText("Constructor").getDOM();
        this.root.append(this.header);

        document.toolbar = new Toolbar()
        document.grid = new Grid().setStyle("grid").setID("canvas")
        document.details = new Details()

        this.panel = new Div([document.toolbar, document.grid, document.details])
            .setStyle("container");
        this.root.append(this.panel.getDOM());
    }
}
