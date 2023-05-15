import {FileStructure} from "../../../../../objects/FileStructure.js";
import {EFileType} from "../../../../../enums/EFileType.js";

export class WidgetFile extends FileStructure {
    #widget = null
    #type = EFileType.WIDGET

    /**
     * @param {WidgetStructure} widget
     */
    constructor(widget) {
        super(widget);
        this.#widget = widget;
    }

    toJSON() {
        return {
            uid: this.getUID(),
            type: this.#type,
            structure: this.getStructure()
        }
    }

    getUID() {
        return this.#widget.getUID();
    }

    openAction(event) {
        document.openWidget(this.#widget);
    }

    getType() {
        return this.#type;
    }
}