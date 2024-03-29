import {DOM} from "../../../../elements/dom/DOM.js";
import {CollectionTableHeader} from "../table/CollectionTableHeader.js";
import {CollectionTableRow} from "../table/CollectionTableRow.js";

export class CollectionContainer extends DOM {

    attributes = []


    constructor(props) {
        super(props);
        document.addCollectionListener(this);
        this.drawAttributes(props.collection);
    }

    createElement(props) {
        super.createElement(props);
        this.setStyle("container-collection");

        const header = new CollectionTableHeader();
        this.append(header);
    }

    /**
     * @param {CollectionStructure} collection
     */
    drawAttributes(collection) {
        const parent = this;
        Object.entries(collection.getAttributes()).forEach(([key, attribute]) => {
            if (key in parent.attributes) {
                const row = parent.attributes[key];
                row.updateElement(attribute);
            } else {
                const row = new CollectionTableRow({attribute: attribute});
                parent.attributes[key] = row;
                parent.append(row);
            }
        });
    }

    /**
     * @param {UpdateStructure} update
     */
    collectionChangeNotify(update) {
        this.drawAttributes(update.getElement());
    }
}