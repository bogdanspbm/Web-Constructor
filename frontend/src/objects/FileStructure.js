import {EFileType} from "../enums/EFileType.js";

export class FileStructure {

    #type = EFileType.DIRECTORY
    #name
    #uid

    constructor() {
        this.#uid = Math.random().toString().replace("0.", "")
    }

    getType() {
        return this.#type
    }

    /**
     * @param {EFileType} type
     */
    setType(type) {
        this.#type = type
    }

    /**
     * @param {String} name
     */
    setName(name) {
        this.#name = name
    }

    getName() {
        if (this.#name === undefined) {
            this.#name = this.#type["default_name"]
        }
        return this.#name
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