import {EFileType} from "../../enums/EFileType.js";

export class ScriptStructure {

    uid;
    name;
    tooltip;
    type;
    body;

    constructor(json) {
        this.uid = Math.random().toString().replace("0.", "");
        this.name = EFileType.SCRIPT["default_name"];
        this.tooltip = "";
        this.body = ""

        this.buildFromJSON(json);
    }

    buildFromJSON(json) {
        if (!json) {
            return;
        }

        this.name = json.name;
        this.uid = json.uid;
        this.body = json.body;
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