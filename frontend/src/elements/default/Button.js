import {Clickable} from "../interface/Clickable.js";

export class Button extends Clickable {
    createElement() {
        super.createElement();
        this.setStyle("button");
    }

    setText(text) {
        this.element.textContent = text;
        return this;
    }
}