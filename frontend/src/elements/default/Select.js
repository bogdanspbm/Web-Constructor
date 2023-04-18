import {DOM} from "../dom/DOM.js";

export class Select extends DOM {
    createElement() {
        this.element = document.createElement("select");
        this.setStyle("selector")
    }
}

export class Option extends DOM {

    constructor(name) {
        super();

        this.setText(name)
    }

    createElement() {
        this.element = document.createElement("option");
        this.setStyle("option")
    }
}
