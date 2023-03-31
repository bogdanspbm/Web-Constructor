import {DOM} from "../../../../elements/dom/DOM.js";
import {Icon} from "../../../../elements/icon/Icon.js";
import {Button} from "../../../../elements/default/Button.js";

export class PageButton extends Button {
    createElement() {
        super.createElement();
        this.setStyle("page-button")

        this.logo = new Icon("./../resources/icons/ic_check_16x16.svg").setAttribute("margin-right", "10px")
        this.append(this.logo)

        this.header = new DOM().setStyle("small-header")
        this.append(this.header)
    }

    setText(text) {
        this.header.setText(text)
        return this
    }
}