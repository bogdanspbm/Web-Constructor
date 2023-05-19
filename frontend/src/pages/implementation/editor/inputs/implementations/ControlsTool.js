import {EditorToolbarExpand} from "../EditorToolbarExpand.js";
import {EditorToolbarButton} from "../EditorToolbarButton.js";
import {ButtonComponent, InputComponent, TextComponent,} from "../../../../../grid/objects/Component.js";
import {ComponentStructure} from "../../../../../objects/ComponentStructure.js";
import {EElementType} from "../../../../../enums/EElementType.js";

export class ControlsTool extends EditorToolbarExpand {

    createElement(props) {
        super.createElement(props);
        this.setText("Controls");

        this.inputButton = new EditorToolbarButton()
            .addIcon("./../resources/icons/ic_input_40x40.svg")
            .setText("Input Component")
            .setClickEvent(() => {
                const element = new ComponentStructure(props.widget, EElementType.INPUT);
                props.widget.addElement(element);
            });

        this.textButton = new EditorToolbarButton()
            .addIcon("./../resources/icons/ic_text_40x40.svg")
            .setText("Text Component")
            .setClickEvent(() => {
                const element = new ComponentStructure(props.widget, EElementType.TEXT);
                props.widget.addElement(element);
            });

        this.buttonButton = new EditorToolbarButton()
            .addIcon("./../resources/icons/ic_button_40x40.svg")
            .setText("Button Component")
            .setClickEvent(() => {
                const element = new ComponentStructure(props.widget, EElementType.BUTTON);
                props.widget.addElement(element);
            });

        this.append(this.inputButton);
        this.append(this.textButton);
        this.append(this.buttonButton);
    }
}
