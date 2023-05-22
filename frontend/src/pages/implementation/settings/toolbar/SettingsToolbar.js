import {DOM} from "../../../../elements/dom/DOM.js";
import {SettingsToolbarTab} from "../inputs/SettingsToolbarTab.js";

export const ESettingsPageTabs = Object.freeze({
    PROJECT: {
        "name": "Project settings",
        "icon": "./../resources/icons/ic_project_24x24.svg"
    },
    GROUPS: {
        "name": "Configurate tabs",
        "icon": "./../resources/icons/ic_group_24x24.svg"
    },
});

export class SettingsToolbar extends DOM {

    constructor(props) {
        super(props);
    }

    createElement(props) {
        super.createElement();
        this.setStyle("toolbar").setAttribute("padding", "20px").setAttribute("width", "240px");
        this.setAttribute("gap", "15px");

        const projectTab = new SettingsToolbarTab({tab: ESettingsPageTabs.PROJECT, selectedTab: props.tab});
        this.append(projectTab);

        const groupTab = new SettingsToolbarTab({tab: ESettingsPageTabs.GROUPS, selectedTab: props.tab});
        this.append(groupTab);
    }
}