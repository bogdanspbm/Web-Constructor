import {EditorToolbarExpand} from "../EditorToolbarExpand.js";
import {EditorToolbarButton} from "../EditorToolbarButton.js";
import {ButtonComponent, InputComponent, TextComponent,} from "../../../../../grid/objects/Component.js";
import {ComponentStructure} from "../../../../../objects/ComponentStructure.js";
import {EElementType} from "../../../../../enums/EElementType.js";

export class ControlsTool extends EditorToolbarExpand {

    /**
     * @param {WidgetStructure} widget
     */
    constructor(widget) {
        super(widget);
    }

    /**
     * @param {WidgetStructure} widget
     */
    createElement(widget) {
        super.createElement();
        this.setText("Controls");

        this.inputButton = new EditorToolbarButton()
            .addIcon("./../resources/icons/ic_input_40x40.svg")
            .setText("Input Component")
            .setClickEvent(() => {
                const element = new ComponentStructure(widget, EElementType.INPUT);
                widget.addElement(element);
                //document.grid.append(new InputComponent());
            });

        this.textButton = new EditorToolbarButton()
            .addIcon("./../resources/icons/ic_text_40x40.svg")
            .setText("Text Component")
            .setClickEvent(() => {
                const element = new ComponentStructure(widget, EElementType.TEXT);
                widget.addElement(element);
                //document.grid.append(new TextComponent());
            });

        this.buttonButton = new EditorToolbarButton()
            .addIcon("./../resources/icons/ic_button_40x40.svg")
            .setText("Button Component")
            .setClickEvent(() => {
                const element = new ComponentStructure(widget, EElementType.BUTTON);
                widget.addElement(element);
                //document.grid.append(new ButtonComponent());
            });

        this.append(this.inputButton);
        this.append(this.textButton);
        this.append(this.buttonButton);
    }
}
