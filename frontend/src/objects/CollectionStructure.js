import {UpdateStructure} from "./UpdateStructure.js";
import {EUpdateType} from "../enums/EUpdateType.js";

export class CollectionStructure {

    #uid
    #name
    #attributes

    constructor(json) {
        this.#name = "New Collection";
        this.#attributes = {};
        this.#uid = Math.random().toString().replace("0.", "");

        this.buildFromJSON(json);
    }

    buildFromJSON(json) {
        if (!json) {
            return;
        }

        this.#name = json.name;
        this.#uid = json.uid;
    }

    toJSON() {
        return {
            uid: this.#uid,
            name: this.#name,
            attributes: this.#attributes
        }
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


    getUID() {
        return this.#uid
    }

    /**
     * @param {AttributeStructure} attribute
     */
    addAttribute(attribute) {
        this.#attributes[attribute.getUID()] = attribute;
        const update = new UpdateStructure(this, attribute, EUpdateType.INSERT);
        document.updateCollection(update);
    }

    getAttributes() {
        return this.#attributes;
    }
}