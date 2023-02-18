import {Div, DOM} from "../../elements/dom/DOM.js";
import {InputsTool} from "./inputs/InputsTool.js";

export class Toolbar extends DOM {

    createElement() {
        super.createElement();
        this.setStyle("toolbar")

        this.header = new Div().setText("Tools").setStyle("sub-header")
        this.header.setAttribute("padding-bottom", "6px").setAttribute("padding-left", "4px")
        this.append(this.header);

        this.inputsTool = new InputsTool().setText("Inputs");
        this.append(this.inputsTool);
    }

}