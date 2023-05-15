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

    constructor(text) {
        super();

        const parent = this
        this.addEvent("mouseover", function () {
            document.setOverlappedMenuItem(parent)
        })

        this.addEvent("mouseout", function () {
            document.setOverlappedMenuItem(null)
        })
        this.setText(text);
    }

    createElement() {
        super.createElement();
        this.setStyle("popup-element")
    }


    bindClickEvent() {
        const parent = this;
        this.element.addEventListener(
            "click",
            function () {
                if (parent.clickAction === undefined) {
                    return;
                }
                if (!parent.active) {
                    return;
                }

                parent.clickAction();
                document.forceDeletePopup();
            },
            false
        );
        return this;
    }


}