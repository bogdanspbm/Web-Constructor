import {Clickable} from "../interface/Clickable.js";

export class Button extends Clickable {
    createElement() {
        super.createElement();
        this.setStyle("button");
    }

    setText(text) {
        this.element.textContent = text;
        return this;
    }
}

export class CheckBox extends Clickable {

    checked = false

    constructor() {
        super();

        const parent = this;
        this.setClickEvent(action => {
            parent.checked = !parent.checked;
            parent.updateStyle();
        });
    }

    createElement() {
        super.createElement();
        this.setStyle("table-row-checkbox");
    }

    setCheckedStyle(style) {
        this.checkedStyle = style;
        return this;
    }

    setUncheckedCheckedStyle(style) {
        this.uncheckedStyle = style;
        return this;
    }

    getChecked() {
        return this.checked;
    }

    updateStyle() {
        if (this.checked) {
            this.setStyle(this.checkedStyle);
        } else {
            this.setStyle(this.uncheckedStyle);
        }
        return this;
    }

    setText(text) {
        this.element.textContent = text;
        return this;
    }
}