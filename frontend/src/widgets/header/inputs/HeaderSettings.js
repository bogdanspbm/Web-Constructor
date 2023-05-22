import {DOM} from "../../../elements/dom/DOM.js";
import {HeaderButton} from "../implementation/HeaderButton.js";
import {EPageType} from "../../../enums/EPageType.js";
import {SettingsPage} from "../../../pages/implementation/settings/SettingsPage.js";

export class HeaderSettings extends DOM {

    createElement(props) {
        if (props.type !== EPageType.FILE_SYSTEM) {
            return;
        }

        super.createElement(props);
        this.setStyle("project-settings");
        const settings = new HeaderButton({path: "./../resources/icons/ic_settings_24x24.svg"})
            .setAttribute("width", "20px", "icon").setAttribute("height", "20px", "icon");
        settings.setClickEvent(action => {
            const page = new SettingsPage({structure: document.projectInfo, type: EPageType.SETTINGS});
            page.openPage();
        });
        this.append(settings);
        props.parent.append(this);
    }
}