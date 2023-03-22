import { ToolbarExpand } from "../ToolbarExpand.js";
import { ToolbarButton } from "../ToolbarButton.js";
import {
  InputComponent,
  TextComponent,
} from "../../../../grid/objects/Component.js";

export class ControlsTool extends ToolbarExpand {
  createElement() {
    super.createElement();
    this.setText("Controls");

    this.inputButton = new ToolbarButton()
      .setText("Input")
      .addClickEvent(() => {
        document.grid.append(new InputComponent());
      });

    this.textButton = new ToolbarButton().setText("Text").addClickEvent(() => {
      document.grid.append(new TextComponent());
    });

    this.buttonButton = new ToolbarButton()
      .setText("Button")
      .addClickEvent(() => {
        document.grid.append(new ButtonComponent());
      });

    this.append(this.inputButton);
    this.append(this.textButton);
    this.append(this.buttonButton);
  }
}
