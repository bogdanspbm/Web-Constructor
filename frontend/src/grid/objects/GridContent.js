import {Selectable} from "../../elements/interface/Selectable.js";
import {GridBlock} from "../Grid.js";

export class GridContent extends Selectable {
    #gridSize = {x: 1, y: 1}

    constructor(elements) {
        super(elements);
    }

    setParent(parent) {
        if (!parent instanceof GridBlock) {
            return this
        }

        this.removeParent()
        this.parent = parent

        return this
    }

    getGridPosition() {
        return this.parent.gridPosition
    }

    getGridSize() {
        return this.#gridSize;
    }

    setGridSize(size, replicate) {

        if (size === undefined) {
            return this;
        }

        this.#gridSize = size;
        return this;
    }

}
