import {EFileType} from "../enums/EFileType.js";


export class VectorStructure {

    uid;
    name;
    tooltip;
    base64;

    constructor(base64) {
        this.uid = Math.random().toString().replace("0.", "");
        this.name = EFileType.VECTOR["default_name"];
        this.tooltip = "";
        this.base64 = base64;
    }

    buildFromJSON(json) {
        if (!json) {
            return;
        }

        this.name = json.name;
        this.tooltip = json.tooltip;
        this.uid = json.uid;
        this.base64 = json.base64;
    }

    toJSON() {
        return {
            name: this.name,
            uid: this.uid,
            tooltip: this.tooltip,
            base64: this.base64
        }
    }

    getUID() {
        return this.uid;
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

    getName() {
        return this.name;
    }

    getTooltip() {
        return this.tooltip;
    }
}