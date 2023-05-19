import {Div, DOM} from "../../../../elements/dom/DOM.js";
import {Input} from "../../../../elements/default/Input.js";
import {Button} from "../../../../elements/default/Button.js";
import {AttributeStructure} from "../../../../objects/AttributeStructure.js";

export class CollectionToolbar extends DOM {


    createElement(props) {
        super.createElement(props);
        this.setStyle("toolbar").setAttribute("padding", "20px").setAttribute("width", "240px");

        const nameHeader = new Div().setText("Name").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const nameInput = new Input({structure: props.collection, field: "name"})
            .setTag("placeholder", "Input Name")
            .clearAttribute("height")
            .setStyle("input-bar")
            .setAttribute("margin-bottom", "15px")
        this.append(nameHeader);
        this.append(nameInput);

        const tooltipHeader = new Div().setText("Tooltip").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const tooltipInput = new Input({structure: props.collection, field: "tooltip"})
            .setTag("placeholder", "Tooltip Name")
            .clearAttribute("height")
            .setStyle("input-bar")
            .setAttribute("margin-bottom", "15px")
        this.append(tooltipHeader);
        this.append(tooltipInput);

        const addButton = new Button().setStyle("blue-button").setAttribute("border-radius", "10px")
            .setAttribute("margin-top", "auto").setAttribute("width", "100%").setText("Add Param");

        addButton.setClickEvent(action => {
            props.collection.addAttribute(new AttributeStructure(props.collection));
        })

        this.append(addButton);
    }
}