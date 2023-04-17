import {Div, DOM} from "../../../../elements/dom/DOM.js";
import {Input} from "../../../../widgets/common/Input.js";

export class CollectionToolbar extends DOM {

    createElement() {
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