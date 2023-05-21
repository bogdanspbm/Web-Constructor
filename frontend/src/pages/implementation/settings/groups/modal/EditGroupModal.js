import {Modal} from "../../../../../elements/default/Modal.js";
import {Div, DOM} from "../../../../../elements/dom/DOM.js";
import {Input} from "../../../../../elements/default/Input.js";
import {VectorSelector} from "../../../vector/selector/VectorSelector.js";

export class EditGroupModal extends Modal {
    createElement(props) {
        super.createElement(props);

        this.container.setStyle("edit-group-modal");

        const header = new DOM().setStyle("edit-group-modal-header").setText("Edit Group");
        this.container.append(header);

        const container = new DOM().setStyle("edit-group-modal-container");
        this.container.append(container);

        const tools = new DOM().setStyle("container-vertical").setAttribute("width", "280px");
        container.append(tools);

        const previewContainer = new DOM().setStyle("container-vertical").setAttribute("width", "100%");
        container.append(previewContainer);

        const base64String = props.group.icon;

        const previewHeader = new Div().setText("Preview").setStyle("small-header").setAttribute("margin-bottom", "5px");
        previewContainer.append(previewHeader);
        const preview = new DOM().setStyle("group-preview-container");
        previewContainer.append(preview);
        const svg = new DOM().setStyle("svg-preview").setAttribute("background-image", `url(${base64String})`)
            .setAttribute("height", "180px").setAttribute("width", "180px");
        preview.append(svg);

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

        const vectorHeader = new Div().setText("Vector").setStyle("small-header").setAttribute("margin-bottom", "5px")
        const vectorInput = new VectorSelector({structure: props.group, field: "icon"})
            .setAttribute("margin-bottom", "15px");
        tools.append(vectorHeader);
        tools.append(vectorInput);
    }
}