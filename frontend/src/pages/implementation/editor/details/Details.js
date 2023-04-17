import {DOM} from "../../../../elements/dom/DOM.js";
import {TextDetail} from "./inputs/TextDetail.js";
import {DetailsTabs} from "./tabs/DetailsTabs.js";

export class Details extends DOM {

    createElement() {
        super.createElement();
        this.setStyle("details")

        this.tabs = new DetailsTabs()
        this.append(this.tabs)

        //this.generateEditors()

        //document.addSelectListener(this)
    }

    clear() {
        for (let i = this.children.length; i >= 0; i--) {
            const child = this.children[i]
            if (child === undefined) {
                continue
            }
            child.removeParent()
        }

        this.append(this.header);
    }

    generateEditors() {
        this.clear()

        const selected = document.selected

        if (selected === undefined) {
            return
        }

        this.textDetails = new TextDetail()
        this.append(this.textDetails)
    }

    selectNotify(element) {
        this.generateEditors()
    }

}