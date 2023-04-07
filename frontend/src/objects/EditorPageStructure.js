import {Grid} from "../grid/Grid.js";

export class EditorPageStructure {

    constructor() {
        this.name = "Untitled"
        this.uid = Math.random().toString().replace("0.", "")
        this.grid = new Grid().setStyle("grid").setID("canvas");
    }

    getName() {
        return this.name
    }

    getGrid() {
        return this.grid
    }

    getUID() {
        return this.uid
    }
}