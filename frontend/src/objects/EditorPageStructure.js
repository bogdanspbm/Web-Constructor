import {Grid} from "../grid/Grid.js";
import {EFile} from "../enums/EFile.js";

export class EditorPageStructure {

    #name
    #uid
    #grid

    constructor() {
        this.#name = EFile.WIDGET["default_name"]
        this.#uid = Math.random().toString().replace("0.", "")
        this.#grid = new Grid().setStyle("grid").setID("canvas");
    }

    getName() {
        return this.#name
    }

    setName(name) {
        this.#name = name
    }

    getGrid() {
        return this.#grid
    }

    getUID() {
        return this.#uid
    }
}