import {DOM} from "../../../../elements/dom/DOM.js";

export class RowInput extends DOM {

    constructor(hint) {
        super(hint);
    }

    setHint(hint) {
        this.hint = hint;
        this.drawHint();
    }

    setOnInputEvent(event) {
        this.inputEvent = event;
    }

    createElement(hint) {
        super.createElement();

        const parent = this;

        this.setStyle("table-row-input")
        this.setText(hint)

        parent.element.addEventListener("click", function (event) {

            if (parent.element.innerHTML === parent.hint) {
                parent.element.innerHTML = ""
            }

            parent.removeAttribute("color");

            parent.setTag("contenteditable", "true")
            parent.element.focus()


            parent.element.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    parent.finishEditEvent();
                }
            });

            parent.element.addEventListener("focusout", (event) => {
                parent.finishEditEvent();
            });
        });
    }

    finishEditEvent() {
        const text = this.element.innerHTML;

        if (text === "") {
            this.drawHint();
        }

        this.setTag("contenteditable", "false");

        if (typeof this.inputEvent !== "function") {
            return
        }

        this.inputEvent(text);
    }

    drawHint() {
        this.setAttribute("color", "#d9d9d9");
        this.setText(this.hint);
    }
}