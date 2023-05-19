import {Div} from "../../../elements/dom/DOM.js";
import {HeaderButton} from "../implementation/HeaderButton.js";
import {EPageType} from "../../../enums/EPageType.js";

export class HeaderControls extends Div {
    createElement(props) {
        if (props.type !== EPageType.EDITOR) {
            return;
        }

        super.createElement();
        this.setStyle("controls-header");

        this.undo = new HeaderButton({path: "./../resources/icons/ic_undo_40x40.svg"});
        this.append(this.undo);

        this.redo = new HeaderButton({path: "./../resources/icons/ic_redo_40x40.svg"});
        this.append(this.redo);

        this.delete = new HeaderButton({path: "./../resources/icons/ic_delete_40x40.svg"});
        this.append(this.delete);

        this.copy = new HeaderButton({path: "./../resources/icons/ic_copy_40x40.svg"});
        this.append(this.copy);

        props.parent.append(this);
    }
}
