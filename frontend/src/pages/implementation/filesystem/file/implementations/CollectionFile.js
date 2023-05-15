import {FileStructure} from "../../../../../objects/FileStructure.js";
import {EFileType} from "../../../../../enums/EFileType.js";
import {CollectionPage} from "../../../collection/CollectionPage.js";

export class CollectionFile extends FileStructure {
    #type = EFileType.COLLECTION;
    #collection;

    /**
     * @param {CollectionStructure} collection
     */
    constructor(collection) {
        super(collection);
        this.#collection = collection;
    }

    toJSON() {
        return {
            uid: this.getUID(),
            type: this.#type,
            structure: this.getStructure()
        }
    }

    openAction(event) {
        const page = new CollectionPage(this.#collection);
        page.openPage();
    }


    getUID() {
        return this.#collection.getUID();
    }

    getType() {
        return this.#type;
    }
}