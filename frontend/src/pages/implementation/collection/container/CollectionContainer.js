import {DOM} from "../../../../elements/dom/DOM.js";
import {CollectionTableHeader} from "../table/CollectionTableHeader.js";
import {CollectionTableRow} from "../table/CollectionTableRow.js";

export class CollectionContainer extends DOM {
    createElement() {
        super.createElement();
        this.setStyle("container-collection");

        const header = new CollectionTableHeader();
        this.append(header);

        const row = new CollectionTableRow();
        this.append(row);
    }


}