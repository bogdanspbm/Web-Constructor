import {EFileType} from "../enums/EFileType.js";
import {UpdateStructure} from "./UpdateStructure.js";
import {EUpdateType} from "../enums/EUpdateType.js";

export class WidgetStructure {

    #name;
    #uid;
    #collection;
    #elements;

    constructor() {
        this.#elements = {};
        this.#name = EFileType.WIDGET["default_name"];
        this.#uid = Math.random().toString().replace("0.", "");
    }

    getName() {
        return this.#name;
    }

    /**
     * @param {String} name
     */
    setName(name) {
        this.#name = name;
    }

    getUID() {
        return this.#uid;
    }

    getCollection() {
        return this.#collection;
    }


    /**
     * @param {CollectionStructure} collection
     */
    setCollection(collection) {
        this.#collection = collection;
    }


    /**
     * @param {ComponentStructure} element
     */
    addElement(element) {
        this.#elements[element.getUID()] = element;
        const update = new UpdateStructure(this, element, EUpdateType.INSERT);
        document.updateWidget(update);
    }

    getElements() {
        return this.#elements;
    }
}