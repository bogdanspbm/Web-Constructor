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
    }
}