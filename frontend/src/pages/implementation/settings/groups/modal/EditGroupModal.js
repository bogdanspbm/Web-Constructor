import {Modal} from "../../../../../elements/default/Modal.js";
import {Div, DOM} from "../../../../../elements/dom/DOM.js";
import {Input} from "../../../../../elements/default/Input.js";

export class EditGroupModal extends Modal {
    createElement(props) {
        super.createElement(props);

        this.container.setStyle("edit-group-modal");

        const header = new DOM().setStyle("edit-group-modal-header").setText("Edit Group");
        this.container.append(header);

        const container = new DOM().setStyle("edit-group-modal-container ");
        this.container.append(container);

        const tools = new DOM().setStyle("container-vertical").setAttribute("width", "280px");
        container.append(tools);

        const nameHeader = new Div().setText("Name").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const nameInput = new Input({structure: props.group, field: "name"})
            .setTag("placeholder", "Input Name")
            .clearAttribute("height")
            .setStyle("input-bar")
            .setAttribute("margin-bottom", "15px");
        tools.append(nameHeader);
        tools.append(nameInput);

        const tooltipHeader = new Div().setText("Tooltip").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const tooltipInput = new Input({structure: props.group, field: "tooltip"})
            .setTag("placeholder", "Tooltip Name")
            .clearAttribute("height")
            .setStyle("input-bar")
            .setAttribute("margin-bottom", "15px");
        tools.append(tooltipHeader);
        tools.append(tooltipInput);
    }
}