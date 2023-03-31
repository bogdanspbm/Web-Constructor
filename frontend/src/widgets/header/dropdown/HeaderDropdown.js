import {Icon} from "../../../elements/icon/Icon.js";
import {Dropdown} from "../../../elements/default/Dropdown.js";

export class HeaderDropdown extends Dropdown {
    constructor(content, path) {
        super(content);
        this.icon = new Icon(path);
        this.icon.setStyle("white-filter");
        this.button.append(this.icon, 0);
    }

    createElement() {
        super.createElement();
        this.button.setStyle("button-header");
    }

    onActiveEvent() {
        if (this.icon === undefined) {
            return;
        }
        this.icon.setStyle("white-filter");
    }

    onDeactivateEvent() {
        if (this.icon === undefined) {
            return;
        }
        this.icon.setStyle("gray-filter");
    }
}
