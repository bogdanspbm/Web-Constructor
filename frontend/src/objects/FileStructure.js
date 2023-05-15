import {EFileType} from "../enums/EFileType.js";

/**
 * @param {WidgetStructure} parent
 * @param {JSON} json
 */
export function createFileFromJSON(json) {
    const file = document.findStructureByUID(json.structure.getUID());
    switch (json.type) {
    }
    return file;
}

export class FileStructure {

    #type = EFileType.DIRECTORY;
    #uid;
    #structure;

    constructor(structure) {
        this.#structure = structure;
        this.#uid = Math.random().toString().replace("0.", "")
    }

    buildFromJSON(json) {
        if (!json) {
            return;
        }

        this.#type = json.type;
        this.#uid = json.uid;
    }

    toJSON() {
        return {
            uid: this.#uid,
            type: this.#type,
            structure: this.#structure
        }
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