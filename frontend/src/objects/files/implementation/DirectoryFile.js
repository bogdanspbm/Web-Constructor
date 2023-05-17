import {FileStructure} from "../FileStructure.js";
import {EFileType} from "../../../enums/EFileType.js";

export class DirectoryFile extends FileStructure {
    #type = EFileType.DIRECTORY


    toJSON() {
        return {
            uid: this.getUID(),
            type: this.#type,
            structure: this.getStructure()
        }
    }

    openAction(event) {
    }

    getType() {
        return this.#type;
    }
}