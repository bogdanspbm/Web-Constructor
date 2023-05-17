import {bindCollectionListener} from "../listeners/CollectionListener.js";
import {FileSystemPage} from "../pages/implementation/filesystem/FileSystemPage.js";
import {bindPopupListener} from "../listeners/PopupListener.js";
import {bindFileListener} from "../listeners/FileListener.js";
import {bindWidgetListener} from "../listeners/WidgetListener.js";
import {AttributeStructure} from "../objects/AttributeStructure.js";
import {EFileType} from "../enums/EFileType.js";
import {bindScriptListener} from "../listeners/ScriptListener.js";
import {bindTabsListener} from "../listeners/TabsListener.js";

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
        bindScriptListener();
        bindPopupListener();
        bindTabsListener();

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
        const fileSystem = new FileSystemPage();
        fileSystem.openPage();

        const widgetFile = document.createFile(EFileType.WIDGET);
        widgetFile.setName("User Page");

        const collectionFile = document.createFile(EFileType.COLLECTION);
        collectionFile.setName("User");

        const attribute = new AttributeStructure(collectionFile);
        attribute.setName("ID");
        collectionFile.getStructure().addAttribute(attribute);
    }
}
