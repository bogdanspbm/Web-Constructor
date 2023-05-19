import {EFileType} from "../enums/EFileType.js";
import {UpdateStructure} from "./UpdateStructure.js";
import {EUpdateType} from "../enums/EUpdateType.js";
import {createComponentFromJSON} from "./ComponentStructure.js";

export class WidgetStructure {

    name;
    uid;
    collection;
    components;

    constructor(json) {
        this.components = {};
        this.name = EFileType.WIDGET["default_name"];
        this.uid = Math.random().toString().replace("0.", "");

        this.buildFromJSON(json);
    }

    buildFromJSON(json) {
        if (!json) {
            return;
        }

        this.name = json.name;
        this.uid = json.uid;

        const parent = this;

        if (json.collection) {
            this.collection = document.collections[json.collection];
        }

        Object.entries(json.components).forEach(([key, value]) => {
            const component = createComponentFromJSON(parent, value);
            parent.components[key] = component;
        });
    }

    toJSON() {
        return {
            name: this.name,
            uid: this.uid,
            collection: this.collection ? this.collection.getUID() : "",
            components: this.components
        }
    }

    getName() {
        return this.name;
    }

    /**
     * @param {String} name
     */
    setName(name) {
        this.name = name;
    }

    getUID() {
        return this.uid;
    }

    getCollection() {
        return this.collection;
    }


    /**
     * @param {CollectionStructure} collection
     */
    setCollection(collection) {
        this.collection = collection;
    }


    /**
     * @param {ComponentStructure} element
     */
    addElement(element) {
        this.components[element.getUID()] = element;
        const update = new UpdateStructure(this, element, EUpdateType.INSERT);
        document.updateWidget(update);
    }

    getElements() {
        return this.components;
    }
}