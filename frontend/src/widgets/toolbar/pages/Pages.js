import {DOM} from "../../../elements/dom/DOM.js";
import {PagesHeader} from "./implementations/PagesHeader.js";
import {PageButton} from "./implementations/PageButton.js";

export class Pages extends DOM {
    createElement() {
        super.createElement();
        this.setStyle("pages")

        this.header = new PagesHeader().setAttribute("margin-left", "4px")
        this.append(this.header)

        this.pagesScroll = new DOM().setStyle("pages-scroll")
        this.append(this.pagesScroll)

        this.mainPage = new PageButton()
        this.pagesScroll.append(this.mainPage)

        this.mainPageB = new PageButton()
        this.pagesScroll.append(this.mainPageB)

        this.mainPageC = new PageButton()
        this.pagesScroll.append(this.mainPageC)

        this.mainPageD = new PageButton()
        this.pagesScroll.append(this.mainPageD)

        this.mainPageE = new PageButton()
        this.pagesScroll.append(this.mainPageE)
    }
}