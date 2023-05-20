import {DOM} from "../../../elements/dom/DOM.js";
import {HeaderButton} from "../implementation/HeaderButton.js";
import {EPageType} from "../../../enums/EPageType.js";
import {FileSystemPage} from "../../../pages/implementation/filesystem/FileSystemPage.js";
import {ProjectPopup} from "../../../popups/implementation/ProjectPopup.js";

export class HeaderFiles extends DOM {
    createElement(props) {
        super.createElement(props);

        const files = new HeaderButton({path: "./../resources/icons/ic_logo_48x48.svg"});
        files.setClickEvent(action => {
            if (props.type !== EPageType.FILE_SYSTEM) {
                const fileSystem = new FileSystemPage({type: EPageType.FILE_SYSTEM});
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
        props.parent.append(files);
    }
}