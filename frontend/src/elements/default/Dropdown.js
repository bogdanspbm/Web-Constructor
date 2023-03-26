import {Button} from "./Button.js";
import {DOM} from "../dom/DOM.js";

export class Dropdown extends DOM {

    show = false

    constructor(content) {
        super();
        this.content = content
        const parent = this
        this.button.addClickEvent(action => {
            parent.show = !parent.show
            parent.content.setAttribute("visibility", parent.show ? "visible" : "hidden")
        })
        parent.content.setAttribute("visibility", parent.show ? "visible" : "hidden")
        this.append(this.content)
    }

    setText(text) {
        this.button.setText(text)
        return this
    }

    createElement() {
        super.createElement();
        const parent = this
        this.button = new Button()
        this.append(this.button)
    }
}