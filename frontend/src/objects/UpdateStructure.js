import {EAttributeType} from "../enums/EAttributeType.js";
import {EContainerType} from "../enums/EContainerType.js";

export class UpdateStructure {

    #element
    #value
    #type

    /**
     * @param {Any} element
     * @param {Any} value
     * @param {EUpdateType} type
     */
    constructor(element, value, type) {
        this.#type = type;
        this.#value = value;
        this.#element = element;
    }

    getElement() {
        return this.#element;
    }

    getValue() {
        return this.#value;
    }

    getType() {
        return this.#type;
    }
}