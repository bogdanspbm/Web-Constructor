import {Div, DOM} from "../../elements/dom/DOM.js";

export class Toolbar extends DOM {

    createElement() {
        super.createElement();
        this.setStyle("toolbar")
    }

}