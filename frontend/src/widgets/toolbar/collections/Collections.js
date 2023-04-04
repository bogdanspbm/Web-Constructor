import {DOM} from "../../../elements/dom/DOM.js";
import {CollectionButton} from "./implementation/CollectionButton.js";

export class Collections extends DOM {

    constructor() {
        super();
        document.addCollectionListener(this)
    }

    createElement() {
        super.createElement();
        this.setStyle("toolbar-elements-block")
        this.setAttribute("visibility", "hidden")
        this.collectionScroll = new DOM().setStyle("flat-scroll")
        this.append(this.collectionScroll)
    }

    collectionCreateNotify(collection) {
        this.setAttribute("visibility", "visible")
        const collectionButton = new CollectionButton(collection)
        this.collectionScroll.append(collectionButton)
    }

}