import {FileStructure} from "../../../../../objects/FileStructure.js";
import {EFileType} from "../../../../../enums/EFileType.js";

export class DirectoryFile extends FileStructure {
    #type = EFileType.DIRECTORY

    openAction(event) {
    }

    getType() {
        return this.#type;
    }
}