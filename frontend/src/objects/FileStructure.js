import {EFile} from "../enums/EFile.js";

export class FileStructure {

    #type = EFile.DIRECTORY
    #name
    #uid

    constructor() {
        this.#uid = Math.random().toString().replace("0.", "")
    }

    getType() {
        return this.#type
    }

    /**
     * @param {EFile} type
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