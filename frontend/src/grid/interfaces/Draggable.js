import {GridContent} from "../objects/GridContent.js";
import {GridBlock} from "../Grid.js";

export class Draggable extends GridContent {

    constructor(elements) {
        super(elements);
        this.createDragElement()
        this.bindEvents()
    }

    createDragElement() {
        this.draggable = document.createElement("div")
        this.draggable.setAttribute("draggable", "true")
        this.draggable.setAttribute("class", "draggable")
        this.draggable.appendChild(this.clickElement)
    }


    getDOM() {
        return this.draggable;
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

    attachToLastDragTarget(target) {
        if (target === undefined) {
            target = document.dragTarget
        }

        if (target === undefined || !(target instanceof GridBlock)) {
            return false;
        }

        target.onDragLeave()
        target.append(this)
        return true
    }

}