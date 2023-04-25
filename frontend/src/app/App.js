import {bindCollectionListener} from "../listeners/CollectionListener.js";
import {FileSystemPage} from "../pages/implementation/filesystem/FileSystemPage.js";
import {bindPopupListener} from "../listeners/PopupListener.js";
import {bindFileListener} from "../listeners/FileListener.js";
import {WidgetFile} from "../pages/implementation/filesystem/file/implementations/WidgetFile.js";
import {WidgetStructure} from "../objects/WidgetStructure.js";
import {CollectionFile} from "../pages/implementation/filesystem/file/implementations/CollectionFile.js";
import {CollectionStructure} from "../objects/CollectionStructure.js";
import {AttributeStructure} from "../objects/AttributeStructure.js";
import {bindWidgetListener} from "../listeners/WidgetListener.js";

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


        bindWidgetListener();
        bindFileListener();
        bindCollectionListener();
        bindPopupListener();

        document.selectListeners = [];
        document.addSelectListener = this.addSelectListener;

        document.mouseMoveListeners = [];
        document.addMouseListener = this.addMouseMoveListener;

        document.idCounter = 0;
        document.getID = function () {
            document.idCounter += 1;
            return document.idCounter;
        };
    }


    generateConstructor() {
        document.addFile(new WidgetFile(new WidgetStructure()));


        const collection = new CollectionStructure();
        collection.setName("User");
        const attribute = new AttributeStructure(collection);
        attribute.setName("ID");
        collection.addAttribute(attribute);
        document.addFile(new CollectionFile(collection));
        const fileSystem = new FileSystemPage();
        fileSystem.openPage();
    }
}
