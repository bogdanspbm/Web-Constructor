import {DOM} from "../../../../../elements/dom/DOM.js";
import {Input} from "../../../../../widgets/common/Input.js";

export class TextDetail extends DOM {

    hint = ""

    /**
     * @param {ComponentStructure} structure
     */
    createElement(structure) {
        this.element = document.createElement("div");
        this.setStyle("detail-block");
        this.setAttribute("padding-top", "6px").setAttribute("padding-bottom", "16px");

        this.header = new DOM().setText("Text").setStyle("sub-sub-header");
        this.append(this.header);

        this.input = new Input();

        const parent = this;

        this.input.setOnChangeEvent(function (event) {
            const value = event.target.value;
            structure.setProperty("text", value);
        })

        this.append(this.input);
        this.setInitText(structure.getProperty("text"));
    }

    /**
     * @param {String} hint
     */
    setHint(hint) {
        this.input.setHint(hint);
        this.setInitText(this.lastText);
        return this;
    }

    /**
     * @param {String} text
     */
    setInitText(text) {

        this.lastText = text;

        if (text === undefined) {
            text = this.hint;
        }

        this.input.setText(text);
    }
}
