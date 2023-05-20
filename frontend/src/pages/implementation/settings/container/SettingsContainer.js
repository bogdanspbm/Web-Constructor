import {DOM} from "../../../../elements/dom/DOM.js";
import {ESettingsPageTabs} from "../toolbar/SettingsToolbar.js";
import {GroupsContainer} from "../groups/GroupsContainer.js";

export class SettingsContainer extends DOM {
    createElement(props) {
        super.createElement(props);
        this.setStyle("container-settings");

        switch (props.tab) {
            case ESettingsPageTabs.PROJECT: {
                return;
            }
            case ESettingsPageTabs.GROUPS: {
                const container = new GroupsContainer();
                this.append(container);
                return;
            }
        }
    }
}