import {Div, DOM} from "../../../../elements/dom/DOM.js";
import {TextArea} from "../../../../elements/default/TextArea.js";
import {Button} from "../../../../elements/default/Button.js";

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

        const scriptHolder = new DOM().setStyle("script-holder");

        const scriptContainer = new TextArea({structure: props.script, field: "body"}).setStyle("code-container");
        const refreshButton = new Button().setStyle("refresh-button ").setText("Refresh").setClickEvent(() => {
            if (!props.event) {
                return;
            }
            const newStruct = props.event();
            scriptContainer.bindStructure(newStruct, "body");
        });

        scriptHolder.append(scriptContainer);
        scriptHolder.append(refreshButton);

        scriptScroll.append(linesColumn);
        scriptScroll.append(scriptHolder);

        this.append(scriptScroll);
    }

    scriptUpdateNotify(update) {
        this.drawAttributes(update.getElement());
    }
}