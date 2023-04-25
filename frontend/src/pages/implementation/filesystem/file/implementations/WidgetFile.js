import {FileStructure} from "../../../../../objects/FileStructure.js";
import {EFileType} from "../../../../../enums/EFileType.js";

export class WidgetFile extends FileStructure {
    #widget = null
    #type = EFileType.WIDGET

    /**
     * @param {WidgetStructure} widget
     */
    constructor(widget) {
        super();
        this.#widget = widget
    }

    getName() {
        return this.#widget.getName()
    }

    setName(name) {
        this.#widget.setName(name)
    }

    getUID() {
        return this.#widget.getUID();
    }

    openAction(event) {
        document.openWidget(this.#widget)
    }

    getType() {
        return this.#type;
    }
}