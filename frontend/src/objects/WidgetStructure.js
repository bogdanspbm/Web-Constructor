import {Grid} from "../grid/Grid.js";
import {EFileType} from "../enums/EFileType.js";

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
     * @param {ElementStructure} element
     */
    addElement(element) {
        this.#elements[element.getUID()] = element;
    }

    getElements() {
        return this.#elements;
    }
}