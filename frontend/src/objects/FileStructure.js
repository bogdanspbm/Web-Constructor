import {EFileType} from "../enums/EFileType.js";

export class FileStructure {

    #type = EFileType.DIRECTORY;
    #uid;
    #structure;

    constructor(structure) {
        this.#structure = structure;
        this.#uid = Math.random().toString().replace("0.", "")
    }

    getType() {
        return this.#type
    }

    getStructure() {
        return this.#structure;
    }


    /**
     * @param {String} name
     */
    setName(name) {
        this.#structure.setName(name);
        document.updateFile(this);
    }

    getName() {
        return this.#structure.getName();
    }

    getUID() {
        if (this.#uid === undefined) {
            this.#uid = this.#type["default_name"]
        }
        return this.#uid
    }

    openAction(event) {
    }

}