import {DOM} from "../../../elements/dom/DOM.js";
import {PagesHeader} from "./implementations/PagesHeader.js";
import {AddPageButton} from "./AddPageButton.js";
import {PageButton} from "./implementations/PageButton.js";
import {Page} from "../../../objects/Page.js";

export class Pages extends DOM {

    constructor() {
        super();
        document.addPageListener(this)
    }

    createElement() {
        super.createElement();
        this.setStyle("pages")

        this.header = new PagesHeader().setAttribute("margin-left", "4px")
        this.append(this.header)

        this.addButton = new AddPageButton("./../resources/icons/ic_add_24x24.svg").setAttribute("height", "24px")
        this.addButton.addClickEvent(action => {
            const page = new Page()
            document.createPage(page)
        })
        this.header.append(this.addButton)

        this.pagesScroll = new DOM().setStyle("pages-scroll")
        this.append(this.pagesScroll)
    }

    pageCreateNotify(page) {
        const pageButton = new PageButton(page)
        this.pagesScroll.append(pageButton)
    }


}