import {FileStructure} from "../../../../../objects/FileStructure.js";
import {EFile} from "../../../../../enums/EFile.js";

export class WidgetFile extends FileStructure {
    editorPage = null
    type = EFile.WIDGET

    /**
     * @param {EditorPageStructure} editorPage
     */
    constructor(editorPage) {
        super();
        this.editorPage = editorPage
    }

    getName() {
        return this.editorPage.getName()
    }

    setName(name) {
        this.editorPage.setName(name)
    }

    getUID() {
        return this.editorPage.getUID();
    }

    openAction(event) {
        document.openPage(this.editorPage)
    }
}