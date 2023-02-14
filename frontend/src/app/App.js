import {Div, Grid} from "../elements/dom/DOM.js";
import {Toolbar} from "../widgets/toolbar/Toolbar.js";
import {CanvasComponent} from "../canvas/objects/canvas/Canvas.js";
import {Details} from "../widgets/details/Details.js";

export class App {

    constructor() {
        this.root = document.getElementById("root");
        this.bindGlobalFunctions();
        this.bindMouseMoveEvent()
        this.generateConstructor();
        //this.createCanvasComponent();
    }

    createCanvasComponent() {
        document.canvas = new CanvasComponent();
    }

    addSelectListener(listener) {
        document.selectListeners.push(listener)
    }

    bindMouseMoveEvent() {
        this.root.addEventListener("mousemove", resize)

        function resize(event) {
            if (document.resizing === undefined || document.resizer === undefined) {
                return
            }

            const minimumSize = 32

            const currentResizer = document.resizer
            const controller = document.resizing

            const originalSize = controller.originalSize
            const originalPosition = controller.orinialPosition
            const clickPoint = controller.clickPoint

            const element = controller.element

            if (currentResizer.classList.contains('bottom-right')) {
                const width = originalSize.width + (event.pageX - clickPoint.x);
                const height = originalSize.height + (event.pageY - clickPoint.y)
                if (width > minimumSize) {
                    element.style.width = width + 'px'
                }
                if (height > minimumSize) {
                    element.style.height = height + 'px'
                }
            } else if (currentResizer.classList.contains('bottom-left')) {
                const height = originalSize.height + (event.pageY - clickPoint.y)
                const width = originalSize.width - (event.pageX - clickPoint.x)
                if (height > minimumSize) {
                    element.style.height = height + 'px'
                }
                if (width > minimumSize) {
                    element.style.width = width + 'px'
                    element.style.left = originalPosition.x + (event.pageX - clickPoint.x) + 'px'
                }
            } else if (currentResizer.classList.contains('top-right')) {
                const width = originalSize.width + (event.pageX - clickPoint.x)
                const height = originalSize.height - (event.pageY - clickPoint.y)
                if (width > minimumSize) {
                    element.style.width = width + 'px'
                }
                if (height > minimumSize) {
                    element.style.height = height + 'px'
                    element.style.top = originalPosition.y + (event.pageY - clickPoint.y) + 'px'
                }
            } else {
                const width = originalSize.width - (event.pageX - clickPoint.x)
                const height = originalSize.height - (event.pageY - clickPoint.y)
                if (width > minimumSize) {
                    element.style.width = width + 'px'
                    element.style.left = originalPosition.x + (event.pageX - clickPoint.x) + 'px'
                }
                if (height > minimumSize) {
                    element.style.height = height + 'px'
                    element.style.top = originalPosition.y + (event.pageY - clickPoint.y) + 'px'
                }
            }

            const overlapOffset = controller.getOverlappingGridBlock()
            document.grid.overlapBlocks(controller.getRootDOM().parent.gridPosition, overlapOffset);
        }

        this.root.addEventListener("mouseup", function (event) {
            document.resizing = undefined
            document.resizer = undefined
            document.draggable = undefined
        })
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
