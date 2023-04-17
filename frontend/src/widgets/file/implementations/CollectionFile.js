import {FileStructure} from "../../../objects/FileStructure.js";
import {EFile} from "../../../enums/EFile.js";

export class CollectionFile extends FileStructure {
    type = EFile.COLLECTION

    openAction(event) {
    }
}