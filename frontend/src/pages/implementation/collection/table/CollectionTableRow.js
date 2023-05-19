import {DOM} from "../../../../elements/dom/DOM.js";
import {CheckBox} from "../../../../elements/default/Button.js";
import {TypeSelector} from "../inputs/TypeSelector.js";
import {ContainerSelector} from "../inputs/ContainerSelector.js";
import {Input} from "../../../../elements/default/Input.js";

export class CollectionTableRow extends DOM {

    constructor(props) {
        super(props);
    }

    createElement(props) {
        super.createElement();
        this.setStyle("collection-table-header");

        this.checkBox = new CheckBox().setAttribute("margin-left", "16px");
        this.checkBox.setCheckedStyle("table-row-checkbox-checked").setUncheckedCheckedStyle("table-row-checkbox");
        this.append(this.checkBox);

        console.log(props)

        this.nameInput = new Input({
            structure: props.attribute,
            field: "name"
        }).setAttribute("width", "132px").setAttribute("margin-left", "32px");
        this.nameInput.setHint("Input Name");
        this.append(this.nameInput);

        this.tooltipInput = new Input({
            structure: props.attribute,
            field: "tooltip"
        }).setAttribute("width", "152px").setAttribute("margin-left", "52px");
        this.tooltipInput.setHint("Input Tooltip");
        this.append(this.tooltipInput);

        this.defaultInput = new Input({
            structure: props.attribute,
            field: "value"
        }).setAttribute("width", "132px").setAttribute("margin-left", "42px");
        this.defaultInput.setHint("Default Value");
        this.append(this.defaultInput);

        this.typeInput = new TypeSelector({
            structure: props.attribute,
            field: "type"
        }).setAttribute("width", "142px").setAttribute("margin-left", "70px");
        this.append(this.typeInput);

        this.containerInput = new ContainerSelector({
            structure: props.attribute,
            field: "container"
        }).setAttribute("width", "128px").setAttribute("margin-left", "46px");
        this.append(this.containerInput);
    }

    updateElement(attribute) {
        this.nameInput.setText(attribute.getName());
        this.tooltipInput.setText(attribute.getTooltip());
        this.defaultInput.setText(attribute.getValue());
    }
}