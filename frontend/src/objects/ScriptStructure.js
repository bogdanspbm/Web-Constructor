import {EFileType} from "../enums/EFileType.js";

export class ScriptStructure {

    #uid;
    #name;

    constructor() {
        this.#uid = Math.random().toString().replace("0.", "");
        this.#name = EFileType.SCRIPT["default_name"];
    }

    getUID() {
        return this.#uid;
    }

    setName(name) {
        this.#name = name;
        return this;
    }

    getName() {
        return this.#name;
    }
}