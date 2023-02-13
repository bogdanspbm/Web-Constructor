import {DOM} from "./DOM.js";

export class DecoratorDOM extends DOM {

    parentDOM = undefined
    childLimit = 0

    type = "decorator"

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
     */

    constructor(dom) {
        super()

        if (dom === undefined) {
            return
        }

        this.parentDOM = dom
        this.element.appendChild(dom.getDOM())
    }

    /**
     * @param {DOM} dom
     * @returns {DOM}
     */
    setParentDOM(dom) {
        this.parentDOM = dom
        this.element.appendChild(dom.getDOM())
        return this
    }
}

export class ResizableDOM extends DecoratorDOM {
    createElement() {
        this.element = document.createElement("div");
        this.setStyle("resizable")
    }
}

export class SelectableDOM extends DecoratorDOM {
    createElement() {
        const parent = this;
        this.element = document.createElement("div");
        this.setStyle("selectable-off")
        this.element.addEventListener("click", function (event) {
            if (document.selected !== undefined) {
                document.selected.setSelect(false)
            }

            parent.setSelect(true)
            document.selected = parent

        })
    }

    onSelect() {
        this.setStyle("selectable-on")
    }

    onUnselect() {
        this.setStyle("selectable-off")
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