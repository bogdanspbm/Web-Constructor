import {DOM} from "../../../../elements/dom/DOM.js";
import {RowInput} from "../inputs/RowInput.js";
import {CheckBox} from "../../../../elements/default/Button.js";

export class CollectionTableRow extends DOM {
    createElement() {
        super.createElement();
        this.setStyle("collection-table-header");

        const checkBox = new CheckBox().setAttribute("margin-left", "16px");
        checkBox.setCheckedStyle("table-row-checkbox-checked").setUncheckedCheckedStyle("table-row-checkbox");
        this.append(checkBox);

        const nameInput = new RowInput("Name").setAttribute("width", "132px").setAttribute("margin-left", "32px");
        this.append(nameInput)

        const tooltipInput = new RowInput("Tooltip").setAttribute("width", "152px").setAttribute("margin-left", "52px");
        this.append(tooltipInput)

        const defaultInput = new RowInput("Default Value").setAttribute("width", "132px").setAttribute("margin-left", "42px");
        this.append(defaultInput)

        const typeInput = new RowInput("Integer").setAttribute("width", "128px").setAttribute("margin-left", "70px");
        this.append(typeInput)

        const containerInput = new RowInput("Container").setAttribute("width", "128px").setAttribute("margin-left", "46px");
        this.append(containerInput)
    }
}