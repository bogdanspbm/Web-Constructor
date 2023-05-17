import {Div} from "../../elements/dom/DOM.js";
import {HeaderControls} from "./inputs/HeaderControls.js";
import {HeaderButton} from "./inputs/HeaderButton.js";
import {FileSystemPage} from "../../pages/implementation/filesystem/FileSystemPage.js";
import {Button} from "../../elements/default/Button.js";
import {exportProject} from "../../utils/Utils.js";
import {ProjectPopup} from "../../popups/implementation/ProjectPopup.js";
import {EPageType} from "../../enums/EPageType.js";
import {CollectionHeaderTabs} from "../../pages/implementation/collection/header/CollectionHeaderTabs.js";

export class Header extends Div {

    createElement(pageType) {
        super.createElement();
        this.setStyle("header");

        const files = new HeaderButton("./../resources/icons/ic_logo_48x48.svg");
        files.setClickEvent(action => {
            if (pageType !== EPageType.FILE_SYSTEM) {
                const fileSystem = new FileSystemPage()
                fileSystem.openPage()
            } else {
                if (event.which === 3) {
                    console.log("Right Mouse Button")
                }

                const popup = new ProjectPopup().setAttribute("top", (event.pageY - 16) + "px");
                popup.setAttribute("left", (event.pageX - 16) + "px");
                document.createPopup(popup, files);
            }
        })
        this.append(files);

        if (pageType === EPageType.EDITOR) {
            const mainControls = new HeaderControls();
            this.append(mainControls);
        }

        switch (pageType) {
            case EPageType.FILE_SYSTEM: {
                const
                    buttonExport = new Button().setText("Generate").setAttribute("margin-left", "auto")
                        .setAttribute("height", "24px").setAttribute("border-radius", "5px")
                        .setAttribute("margin-right", "10px").setStyle("blue-button");
                buttonExport.setClickEvent(exportProject);
                this.append(buttonExport);
                break
            }
            case EPageType.COLLECTION: {
                const collectionTabs = new CollectionHeaderTabs();
                this.append(collectionTabs);
                break;
            }
        }
    }
}
