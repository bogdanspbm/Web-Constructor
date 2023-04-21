import {DOM} from "../../../../elements/dom/DOM.js";
import {RowInput} from "../inputs/RowInput.js";
import {CheckBox} from "../../../../elements/default/Button.js";
import {TypeSelector} from "../inputs/TypeSelector.js";
import {ContainerSelector} from "../inputs/ContainerSelector.js";

export class CollectionTableRow extends DOM {

    constructor(attribute) {
        super(attribute);
    }

    createElement(attribute) {
        super.createElement();
        this.setStyle("collection-table-header");

        this.checkBox = new CheckBox().setAttribute("margin-left", "16px");
        this.checkBox.setCheckedStyle("table-row-checkbox-checked").setUncheckedCheckedStyle("table-row-checkbox");
        this.append(this.checkBox);

        this.nameInput = new RowInput(attribute.getName()).setAttribute("width", "132px").setAttribute("margin-left", "32px");
        this.nameInput.setHint("Input Name");
        this.nameInput.setOnInputEvent(text => {
            attribute.setName(text);
        })
        this.append(this.nameInput);

        this.tooltipInput = new RowInput(attribute.getTooltip()).setAttribute("width", "152px").setAttribute("margin-left", "52px");
        this.tooltipInput.setHint("Input Tooltip");
        this.tooltipInput.setOnInputEvent(text => {
            attribute.setTooltip(text);
        })
        this.append(this.tooltipInput);

        this.defaultInput = new RowInput(attribute.getValue()).setAttribute("width", "132px").setAttribute("margin-left", "42px");
        this.defaultInput.setHint("Default Value");
        this.defaultInput.setOnInputEvent(text => {
            attribute.setValue(text);
        })
        this.append(this.defaultInput);

        this.typeInput = new TypeSelector().setAttribute("width", "142px").setAttribute("margin-left", "70px");
        this.append(this.typeInput);

        this.containerInput = new ContainerSelector().setAttribute("width", "128px").setAttribute("margin-left", "46px");
        this.append(this.containerInput);
    }

    updateElement(attribute) {
        this.nameInput.setText(attribute.getName());
        this.tooltipInput.setText(attribute.getTooltip());
        this.defaultInput.setText(attribute.getValue());
    }
}