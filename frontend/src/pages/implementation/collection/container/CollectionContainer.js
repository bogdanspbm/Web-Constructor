import {DOM} from "../../../../elements/dom/DOM.js";
import {CollectionTableHeader} from "../table/CollectionTableHeader.js";

export class CollectionContainer extends DOM {
    createElement() {
        super.createElement();
        this.setStyle("container-collection");

        const header = new CollectionTableHeader();
        this.append(header);
    }


}