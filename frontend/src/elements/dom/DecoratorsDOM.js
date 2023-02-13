import {DOM} from "./DOM.js";

export class DecoratorDOM extends DOM {

    parentDOM = undefined
    childLimit = 0


    /**
     * @param {DOM} dom
     */

    constructor(dom) {
        super();
        this.parentDOM = dom
        this.element.appendChild(dom.getDOM())
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
        let parent = this

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