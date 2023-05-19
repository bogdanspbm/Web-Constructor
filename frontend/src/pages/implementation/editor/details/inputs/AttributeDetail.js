import {DOM} from "../../../../../elements/dom/DOM.js";
import {AttributeSelector} from "./AttributeSelector.js";

export class AttributeDetail extends DOM {

    hint = ""


    /**
     * @param {WidgetStructure} widget
     * @param {ComponentStructure} structure
     */
    createElement(structure, widget) {
        this.element = document.createElement("div");
        this.setStyle("detail-block");

        const header = new DOM().setText("Attribute").setStyle("small-header").setAttribute("margin-bottom", "10px");
        this.append(header);

        const selector = new AttributeSelector(structure, "properties:attribute", widget);
        this.append(selector);
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
