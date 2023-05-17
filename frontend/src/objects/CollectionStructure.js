import {UpdateStructure} from "./UpdateStructure.js";
import {EUpdateType} from "../enums/EUpdateType.js";
import {createAttributeFromJSON} from "./AttributeStructure.js";
import {ScriptStructure} from "./ScriptStructure.js";

export class CollectionStructure {

    uid
    name
    attributes
    tooltip
    script

    constructor(json) {
        this.name = "New Collection";
        this.tooltip = "";
        this.attributes = {};
        this.uid = Math.random().toString().replace("0.", "");
        this.script = new ScriptStructure();

        this.buildFromJSON(json);
    }

    buildFromJSON(json) {
        if (!json) {
            return;
        }

        this.name = json.name;
        this.uid = json.uid;
        this.script = new ScriptStructure(json.script);

        const parent = this;
        Object.entries(json.attributes).forEach(([key, value]) => {
            const attribute = createAttributeFromJSON(parent, value);
            parent.attributes[key] = attribute;
        });
    }

    toJSON() {
        return {
            uid: this.uid,
            name: this.name,
            attributes: this.attributes,
            script: this.script
        }
    }

    getName() {
        return this.name;
    }

    getTooltip() {
        return this.tooltip;
    }

    getScript() {
        return this.script;
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name;
    }

    /**
     * @param {string} text
     */
    setTooltip(text) {
        this.tooltip = text;
    }


    getUID() {
        return this.uid;
    }

    /**
     * @param {AttributeStructure} attribute
     */
    addAttribute(attribute) {
        this.attributes[attribute.getUID()] = attribute;
        const update = new UpdateStructure(this, attribute, EUpdateType.INSERT);
        document.updateCollection(update);
    }

    getAttributes() {
        return this.attributes;
    }
}