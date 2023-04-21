import {EType} from "../enums/EType.js";
import {EContainer} from "../enums/EContainer.js";

export class AttributeStructure {

    #parent
    #type
    #container
    #name
    #tooltip
    #uid
    #value

    /**
     * @param {CollectionStructure} parent
     */
    constructor(parent) {
        this.#parent = parent;
        this.#type = EType.INTEGER;
        this.#container = EContainer.SINGLE;
        this.#name = "Variable";
        this.#tooltip = "";
        this.#value = "";
        this.#uid = Math.random().toString().replace("0.", "");
    }

    getName() {
        return this.#name;
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.#name = name;
        this.updateParent();
    }

    getValue() {
        return this.#value;
    }

    /**
     * @param {string} name
     */
    setValue(value) {
        this.#value = value;
        this.updateParent();
    }

    getType() {
        return this.#type;
    }

    /**
     * @param {EType} type
     */
    setType(type) {
        this.#type = type;
        this.updateParent();
    }

    getContainer() {
        return this.#container;
    }

    /**
     * @param {EContainer} container
     */
    setContainer(container) {
        this.#container = container;
        this.updateParent();
    }

    getTooltip() {
        return this.#tooltip;
    }

    /**
     * @param {string} tooltip
     */
    setTooltip(tooltip) {
        this.#tooltip = tooltip;
        this.updateParent();
    }


    getUID() {
        return this.#uid
    }

    updateParent() {
        document.updateCollection(this.#parent);
    }
}