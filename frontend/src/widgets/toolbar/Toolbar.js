import {DOM} from "../../elements/dom/DOM.js";
import {InputsTool} from "./inputs/InputsTool.js";

export class Toolbar extends DOM {

    createElement() {
        super.createElement();
        this.setStyle("toolbar")

        this.header = new DOM().setText("Tools").setStyle("sub-header")
        this.header.setAttribute("padding", "14px").setAttribute("border-bottom", "solid 1px #F7F7F7")
        this.header.setAttribute("width", "272px")
        this.append(this.header);

        this.inputsTool = new InputsTool().setText("Inputs");
        this.append(this.inputsTool);
    }

}