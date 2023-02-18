import {DOM} from "../../elements/dom/DOM.js";
import {TextDetail} from "./inputs/TextDetail.js";

export class Details extends DOM {
    createElement() {
        super.createElement();
        this.setStyle("details")

        this.header = new DOM().setText("Details").setStyle("sub-header")
        this.header.setAttribute("padding", "14px").setAttribute("border-bottom", "solid 1px #F7F7F7")
        this.append(this.header);

        this.textDetails = new TextDetail()
        this.append(this.textDetails)

        document.addSelectListener(this)
    }

    selectNotify(element) {
    }
}