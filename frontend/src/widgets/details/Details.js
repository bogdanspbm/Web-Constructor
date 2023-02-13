import {DOM} from "../../elements/dom/DOM.js";

export class Details extends DOM {
    createElement() {
        super.createElement();
        this.setStyle("details")

        this.header = new DOM().setText("Details").setStyle("sub-header")
        this.append(this.header);

        document.addSelectListener(this)
    }

    selectNotify(element) {
        console.log(element.getParentDOM())
    }
}