import {DOM} from "../../../../../elements/dom/DOM.js";
import {Input} from "../../../../../elements/default/Input.js";

export class TextDetail extends DOM {

    hint = ""

    createElement(props) {
        this.element = document.createElement("div");
        this.setStyle("detail-block");

        this.header = new DOM().setText("Text").setStyle("small-header").setAttribute("margin-bottom", "10px");
        this.append(this.header);

        this.input = new Input().setStyle("input-bar").setAttribute("height", "26px");

        this.input.setOnChangeEvent(function (event) {
            const value = event.target.value;
            props.structure.setProperty("text", value);
        })

        this.append(this.input);
        this.setInitText(props.structure.getProperty("text"));
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
