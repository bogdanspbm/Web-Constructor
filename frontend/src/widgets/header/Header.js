import {Div} from "../../elements/dom/DOM.js";
import {HeaderControls} from "./inputs/HeaderControls.js";
import {HeaderDetails} from "./inputs/HeaderDetails.js";
import {HeaderDropdown} from "./dropdown/HeaderDropdown.js";
import {DatabaseTabs} from "./tabs/DatabaseTabs.js";
import {HeaderButton} from "./inputs/HeaderButton.js";
import {FileSystemPage} from "../../pages/implementation/filesystem/FileSystemPage.js";
import {Button} from "../../elements/default/Button.js";

export class Header extends Div {

    createElement(flag) {
        super.createElement();
        this.setStyle("header");

        const files = new HeaderButton("./../resources/icons/ic_logo_48x48.svg");
        files.setClickEvent(action => {
            const fileSystem = new FileSystemPage()
            fileSystem.openPage()
        })
        this.append(files);

        if (flag) {
            const mainControls = new HeaderControls();
            this.append(mainControls);
        }

        const buttonExport = new Button().setText("Export").setAttribute("margin-left", "auto")
            .setAttribute("height", "24px").setAttribute("border-radius", "5px")
            .setAttribute("margin-right","10px").setStyle("blue-button");
        this.append(buttonExport)
    }
}
