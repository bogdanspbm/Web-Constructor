import {EFile} from "../enums/EFile.js";

export class FileStructure {

    type = EFile.DIRECTORY

    constructor() {
    }

    getType() {
        return this.type
    }

    /**
     * @param {EFile} type
     */
    setType(type) {
        this.type = type
    }

    /**
     * @param {String} name
     */
    setName(name) {
        this.name = name
    }

    getName() {
        if (this.name === undefined) {
            this.name = this.type["default_name"]
        }
        return this.name
    }

    openAction(event) {
    }

}