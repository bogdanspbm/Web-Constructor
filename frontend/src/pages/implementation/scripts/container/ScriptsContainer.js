import {Div, DOM} from "../../../../elements/dom/DOM.js";
import {TextArea} from "../../../../elements/default/TextArea.js";

export class ScriptsContainer extends DOM {

    constructor(props) {
        super(props);
        document.addScriptListener(this);
    }

    createElement(props) {
        super.createElement(props);
        this.setStyle("container-script");

        const scriptScroll = new Div().setStyle("script-scroll");

        const linesColumn = new Div().setStyle("lines-container");
        const scriptContainer = new TextArea({structure: props.script, field: "body"}).setStyle("code-container");

        scriptScroll.append(linesColumn);
        scriptScroll.append(scriptContainer);

        this.append(scriptScroll);
    }

    scriptUpdateNotify(update) {
        this.drawAttributes(update.getElement());
    }
}