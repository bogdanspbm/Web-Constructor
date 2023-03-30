import {Div} from "../../elements/dom/DOM.js";
import {HeaderControls} from "./implementation/HeaderControls.js";
import {HeaderDetails} from "./implementation/HeaderDetails.js";
import {HeaderDropdown} from "./HeaderDropdown.js";
import {DatabaseTabs} from "./implementation/DatabaseTabs.js";
import {HeaderButton} from "./HeaderButton.js";

export class Header extends Div {
    createElement() {
        super.createElement();
        this.setStyle("header");

        this.files = new HeaderButton("./../resources/icons/ic_logo_48x48.svg");
        this.append(this.files);

        this.mainControls = new HeaderControls();
        this.append(this.mainControls);

        this.databaseTab = new DatabaseTabs()
        this.databaseControl = new HeaderDropdown(this.databaseTab, "./../resources/icons/ic_database_40x40.svg").setAttribute("width", "50px").setAttribute("margin-left", "180px").setAttribute("z-index", "2").setAttribute("height", "50px");
        this.append(this.databaseControl);

        this.detailsControls = new HeaderDetails();
        this.append(this.detailsControls);
    }
}
