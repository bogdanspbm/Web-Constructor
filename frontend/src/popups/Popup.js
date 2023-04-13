import {DOM} from "../elements/dom/DOM.js";
import {Button} from "../elements/default/Button.js";

export class PopupMenu extends DOM {

    createElement() {
        super.createElement();

        this.setStyle("popup")
        this.addEvent("mouseout", function (event) {
            document.deletePopup();
        })
    }
}

export class PopupElement extends Button {
    createElement() {
        super.createElement();

        this.setStyle("popup-element")
    }
}