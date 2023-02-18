import {DOM} from "../../elements/dom/DOM.js";

export class Input extends DOM {

    setOnChangeEvent(event) {
        this.onChangeEvent = event
    }

    createElement() {
        this.element = document.createElement("input")
        this.setStyle("input-component")
        this.setAttribute("height", "28px")
        this.bindEvents()
    }

    bindEvents() {
        const parent = this
        this.element.addEventListener("input", function (event) {
            if (typeof parent.onChangeEvent !== "function") {
                return
            }
            parent.onChangeEvent(event)
        })
    }
}