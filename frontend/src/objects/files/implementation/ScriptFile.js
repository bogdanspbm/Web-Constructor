import {FileStructure} from "../FileStructure.js";
import {EFileType} from "../../../enums/EFileType.js";
import {ScriptsPage} from "../../../pages/implementation/scripts/ScriptsPage.js";
import {EPageType} from "../../../enums/EPageType.js";

export class ScriptFile extends FileStructure {
    type = EFileType.SCRIPT;
    script;

    /**
     * @param {ScriptStructure} script
     */
    constructor(script) {
        super(script);
        this.script = script;
    }

    toJSON() {
        return {
            uid: this.getUID(),
            type: this.type,
            structure: this.getStructure()
        }
    }

    openAction(event) {
        const page = new ScriptsPage({structure: this.script, type: EPageType.SCRIPT});
        page.openPage();
    }


    getUID() {
        return this.script.getUID();
    }

    getType() {
        return this.type;
    }
}