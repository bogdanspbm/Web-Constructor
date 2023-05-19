import {Div, DOM} from "../../../../elements/dom/DOM.js";
import {Input} from "../../../../elements/default/Input.js";
import {ScriptTypeSelector} from "../selectors/ScriptTypeSelector.js";

export class ScriptsToolbar extends DOM {

    constructor(props) {
        super(props);
    }

    createElement(props) {
        super.createElement();
        this.setStyle("toolbar").setAttribute("padding", "20px").setAttribute("width", "240px");

        const nameHeader = new Div().setText("Name").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const nameInput = new Input({structure: props.script, field: "name"})
            .setTag("placeholder", "Input Name")
            .clearAttribute("height")
            .setStyle("input-bar")
            .setAttribute("margin-bottom", "15px");
        this.append(nameHeader);
        this.append(nameInput);

        const tooltipHeader = new Div().setText("Tooltip").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const tooltipInput = new Input({structure: props.script, field: "tooltip"})
            .setTag("placeholder", "Tooltip Name")
            .clearAttribute("height")
            .setStyle("input-bar")
            .setAttribute("margin-bottom", "15px");
        this.append(tooltipHeader);
        this.append(tooltipInput);

        const typeSelectorHeader = new Div().setText("Script Type").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const typeInput = new ScriptTypeSelector({structure: props.script, field: "type"}).setAttribute("margin-bottom", "15px")
        this.append(typeSelectorHeader);
        this.append(typeInput);
    }
}