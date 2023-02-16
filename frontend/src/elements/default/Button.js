import {Clickable} from "../interface/Clickable.js";

export class Button extends Clickable {
    createElement() {
        super.createElement();

        this.text = document.createElement("div");
        this.text.setAttribute("class", "button-text");

        this.element.appendChild(this.text);

        this.setStyle("button");
    }

    setText(text) {
        this.text.textContent = text;
        return this;
    }
}