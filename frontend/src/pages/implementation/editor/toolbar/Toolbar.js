import {DOM} from "../../../../elements/dom/DOM.js";
import {ControlsTool} from "../inputs/implementations/ControlsTool.js";

export class Toolbar extends DOM {
    createElement() {
        super.createElement();
        this.setStyle("toolbar");

        this.inputsTool = new ControlsTool();
        this.append(this.inputsTool);
    }
}
