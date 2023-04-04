import {Button} from "../../../elements/default/Button.js";
import {Icon} from "../../../elements/icon/Icon.js";

export class AddPageButton extends Button {
    constructor(path) {
        super();
        this.icon = new Icon(path);
        this.append(this.icon);
        this.setStyle("toolbar-button-small")
    }

    createElement() {
        super.createElement();
        this.setStyle("button-header");
    }

    onActiveEvent() {
        if (this.icon === undefined) {
            return;
        }
        this.icon.setStyle("");
    }

    onDeactivateEvent() {
        if (this.icon === undefined) {
            return;
        }
        this.icon.setStyle("white-filter");
    }
}
