import {DOM} from "../../../../elements/dom/DOM.js";
import {ControlsTool} from "../inputs/implementations/ControlsTool.js";

export class EditorToolbar extends DOM {

    /**
     * @param {WidgetStructure} widget
     */
    constructor(props) {
        super(props);
    }


    /**
     * @param {WidgetStructure} widget
     */
    createElement(props) {
        super.createElement();
        this.setStyle("toolbar");

        const inputsTool = new ControlsTool({widget: props.widget});
        this.append(inputsTool);
    }
}
