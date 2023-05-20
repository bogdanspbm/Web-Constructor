import {DOM} from "../../../elements/dom/DOM.js";
import {EPageType} from "../../../enums/EPageType.js";
import {Input} from "../../../elements/default/Input.js";

export class HeaderProjectName extends DOM {
    createElement(props) {
        super.createElement(props);
        this.setStyle("project-name");

        if (props.type !== EPageType.FILE_SYSTEM) {
            return;
        }

        const nameInput = new Input({structure: document.projectInfo, field: "name"}).setStyle("input-header");
        this.append(nameInput);
        props.parent.append(this);
    }
}