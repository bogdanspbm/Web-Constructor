import {Draggable} from "./Draggable.js";

export class Transformable extends Draggable {

    clickPoint = {x: 0, y: 0}
    originalSize = {x: 64, y: 32}
    start

    constructor(elements) {
        super(elements);
        this.createTransformElement()
        this.bindResizeEvents()
    }

    createTransformElement() {
        this.transformElement = document.createElement("div")
        this.transformElement.setAttribute("class", "controllers")
        this.createControllers()
        this.setControllersVisibility("hidden")
        this.transformElement.appendChild(this.draggable)

        document.addMouseMoveListener(this)
    }

    getDOM() {
        return this.transformElement;
    }

    selectNotify(element) {
        if (element.getParentDOM() !== this.getParentDOM()) {
            this.setControllersVisibility("hidden")
            return
        }

        this.setControllersVisibility("visible")
    }


    mouseMoveNotify(event) {
        const resizing = document.resizing

        if (resizing === undefined) {
            return
        }

        this.resizeOnTransform(event)
    }

    resizeOnTransform(event) {
        const minimumSize = 16

        const currentResizer = document.resizer

        const deltaWidth = (event.pageX - this.clickPoint.x)
        const deltaHeight = (event.pageY - this.clickPoint.y)

        let deltaX = 0;
        let deltaY = 0;

        const blockSize = this.parent.getBlockSize()
        const originalSize = {width: blockSize.width * this.gridSize.x, height: blockSize.height + this.gridSize.y}


        // Это чисто логика изменения размера и позиции
        if (currentResizer.classList.contains('bottom-right')) {
            const width = originalSize.width + deltaWidth
            const height = originalSize.height + deltaHeight
            if (width > minimumSize) {
                this.transformElement.style.width = width + 'px'
            }
            if (height > minimumSize) {
                this.transformElement.style.height = height + 'px'
            }
        } else if (currentResizer.classList.contains('bottom-left')) {
            const height = originalSize.height + deltaHeight
            const width = originalSize.width - deltaWidth
            if (height > minimumSize) {
                this.transformElement.style.height = height + 'px'
            }
            if (width > minimumSize) {
                this.transformElement.style.width = width + 'px'
                this.transformElement.style.left = deltaWidth + 'px'
                deltaX = deltaWidth
            }
        } else if (currentResizer.classList.contains('top-right')) {
            const width = originalSize.width + deltaWidth
            const height = originalSize.height - deltaHeight

            if (width > minimumSize) {
                this.transformElement.style.width = width + 'px'
            }
            if (height > minimumSize) {
                this.transformElement.style.height = height + 'px'
                this.transformElement.style.top = deltaHeight + 'px'
                deltaY = deltaHeight
            }
        } else {
            const width = originalSize.width - deltaWidth
            const height = originalSize.height - deltaHeight
            if (width > minimumSize) {
                this.transformElement.style.width = width + 'px'
                this.transformElement.style.left = deltaWidth + 'px'
                deltaX = deltaWidth
            }
            if (height > minimumSize) {
                this.transformElement.style.height = height + 'px'
                this.transformElement.style.top = deltaHeight + 'px'
                deltaY = deltaHeight
            }
        }
    }

    setControllersVisibility(visibility) {
        this.leftTopResizer.setAttribute("style", "visibility: " + visibility + ";")
        this.rightTopResizer.setAttribute("style", "visibility: " + visibility + ";")
        this.leftBotResizer.setAttribute("style", "visibility: " + visibility + ";")
        this.rightBotResizer.setAttribute("style", "visibility: " + visibility + ";")
    }

    createControllers() {
        this.resizerArray = []

        this.leftTopResizer = document.createElement("div");
        this.leftTopResizer.setAttribute("class", "resizer top-left")
        this.resizerArray.push(this.leftTopResizer)

        this.rightTopResizer = document.createElement("div");
        this.rightTopResizer.setAttribute("class", "resizer top-right")
        this.resizerArray.push(this.rightTopResizer)

        this.leftBotResizer = document.createElement("div");
        this.leftBotResizer.setAttribute("class", "resizer bottom-left")
        this.resizerArray.push(this.leftBotResizer)

        this.rightBotResizer = document.createElement("div");
        this.rightBotResizer.setAttribute("class", "resizer bottom-right")
        this.resizerArray.push(this.rightBotResizer)

        for (let i = 0; i < this.resizerArray.length; i++) {
            this.transformElement.appendChild(this.resizerArray[i])
        }

    }

    bindResizeEvents() {
        const parent = this
        for (let i = 0; i < this.resizerArray.length; i++) {
            const resizer = this.resizerArray[i]
            resizer.addEventListener("mousedown", function (event) {
                parent.setDragEnabled(false)

                document.resizer = resizer
                document.resizing = parent

                parent.clickPoint = {
                    x: event.pageX, y: event.pageY
                }
            })

            resizer.addEventListener("mouseup", function (event) {
                parent.setDragEnabled(true)

                // Clear global data
                document.resizer = undefined
                document.resizing = undefined
                document.canDrag = undefined
            })
        }
    }

    selectEvent() {
        if (this.clickElement === undefined) {
            return false
        }

        this.setStyle("selectable-on", "clickElement")
        this.setControllersVisibility("visible")

        return true
    }

    unSelectEvent() {
        if (this.clickElement === undefined) {
            return false
        }

        this.setStyle("selectable-off", "clickElement")
        this.setControllersVisibility("hidden")
        return true
    }


}