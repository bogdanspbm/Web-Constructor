import {DOM} from "../dom/DOM.js";

export class Clickable extends DOM {
    clickAction;
    active = true;

    constructor(elements) {
        super(elements);
        this.bindClickEvent();
    }

    setActive(flag) {
        if (this.active === flag) {
            return;
        }

        this.active = flag;

        if (flag) {
            this.onActiveEvent();
        } else {
            this.onDeactivateEvent();
        }
    }

    onActiveEvent() {
    }

    onDeactivateEvent() {
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
            },
            false
        );
    }

    setClickEvent(action) {
        this.clickAction = action;
        return this;
    }
}
