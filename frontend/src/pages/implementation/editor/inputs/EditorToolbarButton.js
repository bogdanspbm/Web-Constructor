import {Button} from "../../../../elements/default/Button.js";
import {Icon} from "../../../../elements/icon/Icon.js";
import {DOM} from "../../../../elements/dom/DOM.js";

export class EditorToolbarButton extends Button {
    createElement(props) {
        super.createElement();
        this.setStyle("toolbar-button");
        this.text = new DOM();
        this.text.setStyle("toolbar-button-text");
        this.append(this.text)
    }


    addIcon(path) {
        this.icon = new Icon({path: path});
        this.icon.setStyle("toolbar-button-icon");
        this.append(this.icon);
        return this;
    }

    setText(text) {
        this.text.setText(text)
        return this;
    }
}
