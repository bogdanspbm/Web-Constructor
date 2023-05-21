import {DOM} from "../../../../../elements/dom/DOM.js";
import {Icon} from "../../../../../elements/icon/Icon.js";
import {Button} from "../../../../../elements/default/Button.js";
import {Modal} from "../../../../../elements/default/Modal.js";

export class GroupWidget extends Button {

    constructor(props) {
        super(props);
        this.setClickEvent(() => {
            const modal = new Modal();
            modal.show();
        })
    }

    createElement(props) {
        super.createElement(props);
        this.setStyle("group-widget");

        const preview = new DOM().setStyle("group-preview");
        this.append(preview);

        const editIcon = new Icon({path: "./../resources/icons/ic_edit_16x16.svg"});
        preview.append(editIcon);

        const infoContainer = new DOM().setStyle("info-container");
        this.append(infoContainer)

        const header = new DOM().setStyle("group-header").setText(props.group.getName());
        infoContainer.append(header);

        const tooltip = new DOM().setStyle("group-tooltip").setText(props.group.getTooltip());
        infoContainer.append(tooltip);
    }
}