import {EAttributeType} from "../enums/EAttributeType.js";
import {EContainerType} from "../enums/EContainerType.js";
import {UpdateStructure} from "./UpdateStructure.js";
import {EUpdateType} from "../enums/EUpdateType.js";

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
        this.#type = EAttributeType.INTEGER;
        this.#container = EContainerType.SINGLE;
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
     * @param {EAttributeType} type
     */
    setType(type) {
        this.#type = type;
        this.updateParent();
    }

    getContainer() {
        return this.#container;
    }

    /**
     * @param {EContainerType} container
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
        const update = new UpdateStructure(this.#parent, this, EUpdateType.CHANGE);
        document.updateCollection(update);
    }
}