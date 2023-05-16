import {Div, DOM} from "../../../../elements/dom/DOM.js";
import {Input} from "../../../../widgets/common/Input.js";
import {Button} from "../../../../elements/default/Button.js";
import {AttributeStructure} from "../../../../objects/AttributeStructure.js";

export class ScriptsToolbar extends DOM {

    /**
     * @param {ScriptStructure} script
     */
    constructor(script) {
        super(script);
    }

    /**
     * @param {ScriptStructure} script
     */
    createElement(script) {
        super.createElement();
        this.setStyle("toolbar").setAttribute("padding", "20px").setAttribute("width", "240px");

        const nameHeader = new Div().setText("Name").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const nameInput = new Input().setTag("placeholder", "Input Name").clearAttribute("height").setStyle("input-bar").setAttribute("margin-bottom", "15px")
        this.append(nameHeader);
        this.append(nameInput);

        const tooltipHeader = new Div().setText("Tooltip").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const tooltipInput = new Input().setTag("placeholder", "Tooltip Name").clearAttribute("height").setStyle("input-bar").setAttribute("margin-bottom", "15px")
        this.append(tooltipHeader);
        this.append(tooltipInput);
    }
}