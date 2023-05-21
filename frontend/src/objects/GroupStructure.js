export class GroupStructure {

    uid;
    name;
    tooltip;
    vector;

    constructor(json) {
        this.uid = Math.random().toString().replace("0.", "");
        this.name = "New Group";
        this.tooltip = "Default group to combine pages into single tab. Also can add Icon";
        this.vector = "";
        this.buildFromJSON(json);
    }

    buildFromJSON(json) {
        if (!json) {
            return;
        }

        this.name = json.name;
        this.uid = json.uid;
        this.tooltip = json.tooltip;
        this.vector = document.findStructureByUID(json.vector);
    }

    toJSON() {
        return {
            name: this.name,
            uid: this.uid,
            tooltip: this.tooltip,
            vector: this.vector && typeof this.vector.getUID === "function" ? this.vector.getUID() : ""
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