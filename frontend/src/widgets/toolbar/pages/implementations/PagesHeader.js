import {DOM} from "../../../../elements/dom/DOM.js";

export class PagesHeader extends DOM {
    createElement() {
        super.createElement();
        this.setStyle("pages-header")

        this.header = new DOM().setText("Pages").setStyle("small-header")
        this.append(this.header)
    }
}