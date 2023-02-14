import {DOM} from "./DOM.js";

export class DecoratorDOM extends DOM {

    parentDOM = undefined
    childDOM = undefined
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
    createElement() {
        this.element = document.createElement("div")
        this.setStyle("controllers")
        this.createControllers()
        this.setControllersVisibility("hidden")

        document.addSelectListener(this);
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
        this.leftTopResizer = document.createElement("div");
        this.leftTopResizer.setAttribute("class", "resizer top-left")
        this.element.appendChild(this.leftTopResizer)

        this.rightTopResizer = document.createElement("div");
        this.rightTopResizer.setAttribute("class", "resizer top-right")
        this.element.appendChild(this.rightTopResizer)

        this.leftBotResizer = document.createElement("div");
        this.leftBotResizer.setAttribute("class", "resizer bottom-left")
        this.element.appendChild(this.leftBotResizer)

        this.rightBotResizer = document.createElement("div");
        this.rightBotResizer.setAttribute("class", "resizer bottom-right")
        this.element.appendChild(this.rightBotResizer)

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
        this.getRootDOM().setSelect(true)
    }

    onUnselect() {
        this.setStyle("selectable-off")
        this.getRootDOM().setSelect(false)
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
        document.dragTarget.append(this)
    }
}