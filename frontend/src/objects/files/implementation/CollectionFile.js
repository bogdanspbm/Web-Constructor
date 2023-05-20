import {FileStructure} from "../FileStructure.js";
import {EFileType} from "../../../enums/EFileType.js";
import {CollectionPage} from "../../../pages/implementation/collection/CollectionPage.js";
import {EPageType} from "../../../enums/EPageType.js";

export class CollectionFile extends FileStructure {
    type = EFileType.COLLECTION;
    collection;

    /**
     * @param {CollectionStructure} collection
     */
    constructor(collection) {
        super(collection);
        this.collection = collection;
    }

    toJSON() {
        return {
            uid: this.getUID(),
            type: this.type,
            structure: this.getStructure()
        }
    }

    openAction(event) {
        const page = new CollectionPage({structure: this.collection, type: EPageType.COLLECTION});
        page.openPage();
    }


    getUID() {
        return this.collection.getUID();
    }

    getType() {
        return this.type;
    }
}