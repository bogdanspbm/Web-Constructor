import {EType} from "../enums/EType.js";
import {EContainer} from "../enums/EContainer.js";

export class AttributeStructure {

    #type
    #container
    #name
    #tooltip
    #uid
    #value

    constructor() {
        this.#type = EType.INTEGER
        this.#container = EContainer.SINGLE
        this.#name = "Variable"
        this.#tooltip = ""
        this.#value = ""
        this.#uid = Math.random().toString().replace("0.", "")
    }

    getName() {
        return this.#name
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.#name = name
    }

    getValue() {
        return this.#value
    }

    /**
     * @param {string} name
     */
    setValue(value) {
        this.#value = value
    }

    getType() {
        return this.#type
    }

    /**
     * @param {EType} type
     */
    setType(type) {
        this.#type = type;
    }

    getContainer() {
        return this.#container;
    }

    /**
     * @param {EContainer} container
     */
    setContainer(container) {
        this.#container = container;
    }

    getTooltip() {
        return this.#tooltip;
    }

    /**
     * @param {string} tooltip
     */
    setTooltip(tooltip) {
        this.#tooltip = tooltip;
    }


    getUID() {
        return this.#uid
    }
}