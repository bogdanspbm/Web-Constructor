import {FileStructure} from "../../../../../objects/FileStructure.js";
import {EFileType} from "../../../../../enums/EFileType.js";
import {CollectionPage} from "../../../collection/CollectionPage.js";
import {ScriptsPage} from "../../../scripts/ScriptsPage.js";

export class ScriptFile extends FileStructure {
    #type = EFileType.SCRIPT;
    #script;

    /**
     * @param {ScriptStructure} script
     */
    constructor(script) {
        super(script);
        this.#script = script;
    }

    toJSON() {
        return {
            uid: this.getUID(),
            type: this.#type,
            structure: this.getStructure()
        }
    }

    openAction(event) {
        const page = new ScriptsPage(this.#script);
        page.openPage();
    }


    getUID() {
        return this.#script.getUID();
    }

    getType() {
        return this.#type;
    }
}