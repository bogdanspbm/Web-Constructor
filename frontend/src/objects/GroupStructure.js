export class GroupStructure {

    uid;
    name;
    tooltip;
    icon;

    constructor() {
        this.uid = Math.random().toString().replace("0.", "");
        this.name = "New Group";
        this.tooltip = "";
        this.icon = "";
    }

    buildFromJSON(json) {
        if (!json) {
            return;
        }

        this.name = json.name;
        this.uid = json.uid;
        this.base64 = json.base64;
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