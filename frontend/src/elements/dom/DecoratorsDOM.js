import {DOM} from "./DOM.js";

export class DecoratorDOM extends DOM {

    parentDOM = undefined
    childLimit = 0

    type = "decorator"


    /**
     * @param {DOM} dom
     */

    constructor(dom) {
        super()

        if (dom === undefined) {
            return
        }

        this.parentDOM = dom
        dom.children.push(this)
        this.element.appendChild(dom.getDOM())
    }


    /**
     * @returns {DOM}
     */
    getParentDOM() {
        if (this.parentDOM === undefined) {
            return this
        }

        if (this.parentDOM.type === "dom") {
            return this.parentDOM
        }

        return this.parentDOM.getParentDOM()
    }


    /**
     * @param {DOM} dom
     * @returns {DOM}
     */
    setParentDOM(dom) {
        this.parentDOM = dom
        this.element.appendChild(dom.getDOM())

        dom.children.push(this)

        return this
    }
}

export class ResizableDOM extends DecoratorDOM {
    gridSize = {x: 1, y: 1}

    createElement() {
        this.resizerArray = []
        this.element = document.createElement("div")
        this.setStyle("controllers")
        this.createControllers()
        this.setControllersVisibility("hidden")
        this.bindResize()

        document.addSelectListener(this);
    }

    bindResize() {
        const parent = this
        for (let i = 0; i < this.resizerArray.length; i++) {
            const resizer = this.resizerArray[i]
            resizer.addEventListener("mousedown", function (event) {
                document.resizer = resizer
                document.resizing = parent

                parent.orinialPosition = {
                    x: parent.element.getBoundingClientRect().left, y: parent.element.getBoundingClientRect().top
                }

                parent.clickPoint = {
                    x: event.pageX, y: event.pageY
                }

                const parentWidth = parseFloat(getComputedStyle(parent.parent.element, null).getPropertyValue('width').replace('px', ''))
                const parentHeight = parseFloat(getComputedStyle(parent.parent.element, null).getPropertyValue('height').replace('px', ''))


                parent.originalSize = {
                    width: parent.gridSize.x * parentWidth, height: parent.gridSize.y * parentHeight
                }
            })

            resizer.addEventListener("mouseup", function (event) {
                parent.gridSize = parent.getOverlappingGridBlock()

                const parentWidth = parseFloat(getComputedStyle(parent.parent.element, null).getPropertyValue('width').replace('px', ''))
                const parentHeight = parseFloat(getComputedStyle(parent.parent.element, null).getPropertyValue('height').replace('px', ''))


                parent.element.style.width = parent.gridSize.x * parentWidth + "px"
                parent.element.style.height = parent.gridSize.y * parentHeight + "px"

                document.resizer = undefined
                document.resizing = undefined
                document.grid.clearOverlappedBlocks(undefined, undefined, true)
            })
        }
    }

    getOverlappingGridBlock() {
        const overlappedBlocksHorizontal = Math.ceil((parseInt(this.element.style.width, 10) - 2) / Math.round(this.originalSize.width / this.gridSize.x))
        const overlappedBlocksVertical = Math.ceil((parseInt(this.element.style.height, 10) - 8) / Math.round(this.originalSize.height / this.gridSize.y))
        return {x: overlappedBlocksHorizontal, y: overlappedBlocksVertical}
    }


    selectNotify(element) {
        if (element.getParentDOM() !== this.getParentDOM()) {
            this.setControllersVisibility("hidden")
            return
        }

        this.setControllersVisibility("visible")
    }

    setControllersVisibility(visibility) {
        this.leftTopResizer.setAttribute("style", "visibility: " + visibility + ";")
        this.rightTopResizer.setAttribute("style", "visibility: " + visibility + ";")
        this.leftBotResizer.setAttribute("style", "visibility: " + visibility + ";")
        this.rightBotResizer.setAttribute("style", "visibility: " + visibility + ";")
    }

    createControllers() {
        console.log(this)
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
            this.element.appendChild(this.resizerArray[i])
        }

    }
}

export class SelectableDOM extends DecoratorDOM {
    createElement() {
        const parent = this;
        this.element = document.createElement("div");
        this.setStyle("selectable-off")
        this.element.addEventListener("click", function (event) {
            document.select(parent)
        })
    }

    onSelect() {
        this.setStyle("selectable-on")
        this.getParentDOM().setSelect(true)
        this.getRootDOM().parent.setSelect(true)
    }

    onUnselect() {
        this.setStyle("selectable-off")
        this.getParentDOM().setSelect(false)
        this.getRootDOM().parent.setSelect(false)
    }

}

export class DraggableDOM extends DecoratorDOM {

    createElement() {
        this.element = document.createElement("div");
        this.setStyle("draggable")
        this.element.setAttribute("draggable", "true")
        this.bindEvents()
    }

    bindEvents() {
        const parent = this

        this.element.addEventListener("dragstart", function (event) {
            document.dragging = parent
            console.log(event)
        })

        this.element.addEventListener("dragend", function (event) {
            document.dragging = undefined
            parent.attachToLastDragTarget()
        })
    }

    attachToLastDragTarget() {
        if (document.dragTarget === undefined) {
            return;
        }

        document.dragTarget.onDragLeave()
        document.dragTarget.append(this.getRootDOM())
    }
}