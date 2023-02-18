import {DOM} from "../../../elements/dom/DOM.js";
import {Input} from "../../common/Input.js";

export class TextDetail extends DOM {
    createElement() {
        this.element = document.createElement("div")
        this.setStyle("detail-block")
        this.setAttribute("padding-top", "6px").setAttribute("padding-bottom", "16px")

        this.header = new DOM().setText("Text").setStyle("sub-sub-header")
        this.append(this.header)

        this.input = new Input()
        this.append(this.input)
    }
}
