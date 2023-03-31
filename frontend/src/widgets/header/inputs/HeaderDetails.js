import { Div } from "../../../elements/dom/DOM.js";
import { HeaderButton } from "./HeaderButton.js";

export class HeaderDetails extends Div {
  createElement() {
    super.createElement();
    this.setStyle("details-header");

    this.details = new HeaderButton(
      "./../resources/icons/ic_details_40x40.svg"
    );
    this.append(this.details);

    this.schema = new HeaderButton("./../resources/icons/ic_schema_40x40.svg");
    this.schema.setActive(false);
    this.append(this.schema);
  }
}
