import {DOM} from "../../../../elements/dom/DOM.js";

export class CollectionToolbar extends DOM {

    createElement() {
        super.createElement();
        this.setStyle("toolbar");
    }
}