import {DOM} from "../../../../elements/dom/DOM.js";
import {Button} from "../../../../elements/default/Button.js";
import {EPageType} from "../../../../enums/EPageType.js";
import {Icon} from "../../../../elements/icon/Icon.js";

export class SettingsToolbarTab extends DOM {

    createElement(props) {
        super.createElement(props);
        this.setStyle("settings-toolbar-tab");

        const icon = new Icon({path: props.tab.icon}).setAttribute("margin-right", "10px");

        const button = new Button().setClickEvent(() => {
            document.notifyTabListener(EPageType.SETTINGS.tabs, props.tab);
        });
        button.setText(props.tab.name);
        button.setStyle(props.tab === props.selectedTab ? "settings-toolbar-button-selected" : "settings-toolbar-button");


        button.append(icon);
        this.append(button);
    }
}