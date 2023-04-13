import {Div} from "../../../elements/dom/DOM.js";
import {HeaderButton} from "./HeaderButton.js";

export class HeaderControls extends Div {
  createElement() {
    super.createElement();
    this.setStyle("controls-header");

    this.undo = new HeaderButton("./../resources/icons/ic_undo_40x40.svg");
    this.append(this.undo);

    this.redo = new HeaderButton("./../resources/icons/ic_redo_40x40.svg");
    this.append(this.redo);

    this.delete = new HeaderButton("./../resources/icons/ic_delete_40x40.svg");
    this.append(this.delete);

    this.copy = new HeaderButton("./../resources/icons/ic_copy_40x40.svg");
    this.append(this.copy);
  }
}
