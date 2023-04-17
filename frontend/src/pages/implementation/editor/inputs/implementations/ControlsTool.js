import {EditorToolbarExpand} from "../EditorToolbarExpand.js";
import {EditorToolbarButton} from "../EditorToolbarButton.js";
import {ButtonComponent, InputComponent, TextComponent,} from "../../../../../grid/objects/Component.js";

export class ControlsTool extends EditorToolbarExpand {
  createElement() {
    super.createElement();
    this.setText("Controls");

    this.inputButton = new EditorToolbarButton()
      .addIcon("./../resources/icons/ic_input_40x40.svg")
      .setText("Input Component")
      .setClickEvent(() => {
        document.grid.append(new InputComponent());
      });

    this.textButton = new EditorToolbarButton()
      .addIcon("./../resources/icons/ic_text_40x40.svg")
      .setText("Text Component")
      .setClickEvent(() => {
        document.grid.append(new TextComponent());
      });

    this.buttonButton = new EditorToolbarButton()
      .addIcon("./../resources/icons/ic_button_40x40.svg")
      .setText("Button Component")
      .setClickEvent(() => {
        document.grid.append(new ButtonComponent());
      });

    this.append(this.inputButton);
    this.append(this.textButton);
    this.append(this.buttonButton);
  }
}
