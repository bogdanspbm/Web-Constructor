import {DOM} from "../../../elements/dom/DOM.js";
import {PageButton} from "./implementations/PageButton.js";

export class Pages extends DOM {

    constructor() {
        super();
        document.addPageListener(this)
    }

    createElement() {
        super.createElement();
        this.setStyle("toolbar-elements-block")
        this.setAttribute("visibility", "hidden")
        this.pagesScroll = new DOM().setStyle("flat-scroll")
        this.append(this.pagesScroll)
    }

    pageCreateNotify(page) {
        this.setAttribute("visibility", "visible")
        const pageButton = new PageButton(page)
        this.pagesScroll.append(pageButton)
    }


}