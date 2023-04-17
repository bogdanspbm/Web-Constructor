import {FileStructure} from "../../../../../objects/FileStructure.js";
import {EFile} from "../../../../../enums/EFile.js";
import {CollectionPage} from "../../../collection/CollectionPage.js";

export class CollectionFile extends FileStructure {
    type = EFile.COLLECTION

    /**
     * @param {CollectionStructure} collection
     */
    constructor(collection) {
        super();
        this.collection = collection
    }

    getName() {
        return this.collection.getName()
    }

    setName(name) {
        this.collection.setName(name)
    }

    openAction(event) {
        const page = new CollectionPage(this.collection);
        page.openPage();
    }

    getUID() {
        return this.collection.getUID();
    }
}