import {FileStructure} from "../../../../../objects/FileStructure.js";
import {EFile} from "../../../../../enums/EFile.js";

export class DirectoryFile extends FileStructure {
    type = EFile.DIRECTORY

    openAction(event) {
    }
}