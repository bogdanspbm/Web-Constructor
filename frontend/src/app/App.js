import {Div} from "../elements/dom/DOM.js";
import {Toolbar} from "../widgets/toolbar/Toolbar.js";
import {Details} from "../widgets/details/Details.js";
import {Grid} from "../grid/Grid.js";

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

    addMouseMoveListener(listener) {
        document.mouseMoveListeners.push(listener)
    }

    // TODO: Мне не нравится что логика ресайза находится в App
    bindMouseMoveEvent() {
        this.root.addEventListener("mousemove", this.notifyMouseMoveListener)
        this.root.addEventListener("mouseup", this.notifyMouseUpListener)

        function resize(event) {
            /*
            if (document.resizing === undefined || document.resizer === undefined) {
                return
            }

            const minimumSize = 32

            const currentResizer = document.resizer
            const controller = document.resizing

            const originalSize = controller.originalSize
            const clickPoint = controller.clickPoint
            const element = controller.element

            const deltaWidth = (event.pageX - clickPoint.x)
            const deltaHeight = (event.pageY - clickPoint.y)

            let deltaX = 0;
            let deltaY = 0;


            // Это чисто логика изменения размера и позиции
            if (currentResizer.classList.contains('bottom-right')) {
                const width = originalSize.width + deltaWidth
                const height = originalSize.height + deltaHeight
                if (width > minimumSize) {
                    element.style.width = width + 'px'
                }
                if (height > minimumSize) {
                    element.style.height = height + 'px'
                }
            } else if (currentResizer.classList.contains('bottom-left')) {
                const height = originalSize.height + deltaHeight
                const width = originalSize.width - deltaWidth
                if (height > minimumSize) {
                    element.style.height = height + 'px'
                }
                if (width > minimumSize) {
                    element.style.width = width + 'px'
                    element.style.left = deltaWidth + 'px'
                    deltaX = deltaWidth
                }
            } else if (currentResizer.classList.contains('top-right')) {
                const width = originalSize.width + deltaWidth
                const height = originalSize.height - deltaHeight

                if (width > minimumSize) {
                    element.style.width = width + 'px'
                }
                if (height > minimumSize) {
                    element.style.height = height + 'px'
                    element.style.top = deltaHeight + 'px'
                    deltaY = deltaHeight
                }
            } else {
                const width = originalSize.width - deltaWidth
                const height = originalSize.height - deltaHeight
                if (width > minimumSize) {
                    element.style.width = width + 'px'
                    element.style.left = deltaWidth + 'px'
                    deltaX = deltaWidth
                }
                if (height > minimumSize) {
                    element.style.height = height + 'px'
                    element.style.top = deltaHeight + 'px'
                    deltaY = deltaHeight
                }
            }

            // Это логика вычисления новой координаты блока в случае отрицательного скейла
            const startPoint = controller.calculateNewGridPosition(deltaX, deltaY)
            const overlapOffset = controller.getOverlappingGridBlock()
            document.canDrag = document.grid.overlapBlocks(startPoint, overlapOffset);*/
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

    notifyMouseMoveListener(event) {
        for (let i = 0; i < document.mouseMoveListeners.length; i++) {
            const listener = document.mouseMoveListeners[i]
            if (typeof listener.mouseMoveNotify === "function") {
                listener.mouseMoveNotify(event)
            }
        }
    }

    notifyMouseUpListener(event) {
        for (let i = 0; i < document.mouseMoveListeners.length; i++) {
            const listener = document.mouseMoveListeners[i]
            if (typeof listener.mouseUpNotify === "function") {
                listener.mouseUpNotify(event)
            }
        }
    }

    bindGlobalFunctions() {
        const parent = this
        document.select = function (item) {
            if (document.selected !== undefined) {
                document.selected.setSelected(false)
            }
            item.setSelected(true)
            document.selected = item
            parent.notifySelectListeners(item)
        }

        document.selectListeners = []
        document.addSelectListener = this.addSelectListener

        document.mouseMoveListeners = []
        document.addMouseListener = this.addMouseMoveListener


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
