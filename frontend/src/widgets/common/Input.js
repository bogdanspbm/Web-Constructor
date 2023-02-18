import {DOM} from "../../elements/dom/DOM.js";

export class Input extends DOM {

    createElement() {
        this.element = document.createElement("div")
        this.setStyle("input-component")
        this.setAttribute("height", "28px")
    }
}