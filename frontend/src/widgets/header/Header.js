import { Div } from "../../elements/dom/DOM.js";
import { HeaderControls } from "./implementation/HeaderControls.js";
import { HeaderDetails } from "./implementation/HeaderDetails.js";
import { HeaderButton } from "./HeaderButton.js";

export class Header extends Div {
  createElement() {
    super.createElement();
    this.setStyle("header").setText("Constructor");

    this.mainControls = new HeaderControls();
    this.append(this.mainControls);

    this.databaseControl = new HeaderButton(
      "./../resources/icons/ic_database_40x40.svg"
    ).setAttribute("margin-left", "180px");
    this.append(this.databaseControl);

    this.detailsControls = new HeaderDetails();
    this.append(this.detailsControls);
  }
}
