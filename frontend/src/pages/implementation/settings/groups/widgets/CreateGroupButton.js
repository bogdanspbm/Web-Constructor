import {Button} from "../../../../../elements/default/Button.js";
import {Icon} from "../../../../../elements/icon/Icon.js";
import {DOM} from "../../../../../elements/dom/DOM.js";

export class CreateGroupButton extends Button {
    createElement(props) {
        super.createElement(props);
        this.setStyle("create-group-button");

        const icon = new Icon({path: "./../resources/icons/ic_plus_48x48.svg"});
        icon.setAttribute("width", "48px").setAttribute("margin-top", "64px")
        const text = new DOM().setText("Create New Group").setStyle("group-create-text");
        this.append(icon);
        this.append(text)
    }
}