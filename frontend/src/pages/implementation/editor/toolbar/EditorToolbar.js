import {DOM} from "../../../../elements/dom/DOM.js";
import {ControlsTool} from "../inputs/implementations/ControlsTool.js";

export class EditorToolbar extends DOM {

    /**
     * @param {WidgetStructure} widget
     */
    constructor(widget) {
        super(widget);
    }


    /**
     * @param {WidgetStructure} widget
     */
    createElement(widget) {
        super.createElement();
        this.setStyle("toolbar");

        this.inputsTool = new ControlsTool(widget);
        this.append(this.inputsTool);
    }
}
