import {DOM} from "../../elements/dom/DOM.js";
import {InputsTool} from "./inputs/InputsTool.js";

export class Toolbar extends DOM {

    createElement() {
        super.createElement();
        this.setStyle("toolbar")

        this.inputsTool = new InputsTool().setText("Inputs");
        this.append(this.inputsTool.getDOM());
    }

}