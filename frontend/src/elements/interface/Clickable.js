import {DOM} from "../dom/DOM.js";

export class Clickable extends DOM {

    clickAction

    constructor(elements) {
        super(elements);
        this.bindClickEvent()
    }

    bindClickEvent() {
        const parent = this
        this.element.addEventListener("click", function () {
            if (parent.clickAction === undefined) {
                return
            }
            parent.clickAction()
        }, false);
    }

    addClickEvent(action) {
        this.clickAction = action
        return this;
    }
}