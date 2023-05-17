import {Div, DOM, TextArea} from "../../../../elements/dom/DOM.js";

export class ScriptsContainer extends DOM {

    /**
     * @param {ScriptStructure} script
     */
    constructor(script) {
        super(script);
        document.addScriptListener(this);
    }

    /**
     * @param {ScriptStructure} script
     */
    createElement(script) {
        super.createElement();
        this.setStyle("container-script");

        const scriptScroll = new Div().setStyle("script-scroll");

        const linesColumn = new Div().setStyle("lines-container");
        const scriptContainer = new TextArea(script, "body").setStyle("code-container");

        scriptScroll.append(linesColumn);
        scriptScroll.append(scriptContainer);

        this.append(scriptScroll);
    }

    scriptUpdateNotify(update) {
        this.drawAttributes(update.getElement());
    }
}