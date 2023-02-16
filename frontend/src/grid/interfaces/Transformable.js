import {Draggable} from "./Draggable.js";

export class Transformable extends Draggable {
    constructor(elements) {
        super(elements);
        this.createTransformElement()
    }

    createTransformElement() {
        this.transformElement = document.createElement("div")
        this.transformElement.setAttribute("class", "controllers")
        this.createControllers()
        this.setControllersVisibility("hidden")
        this.transformElement.appendChild(this.draggable)
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