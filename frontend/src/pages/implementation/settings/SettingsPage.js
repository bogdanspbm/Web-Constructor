import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div} from "../../../elements/dom/DOM.js";
import {SettingsContainer} from "./container/SettingsContainer.js";
import {ESettingsPageTabs, SettingsToolbar} from "./toolbar/SettingsToolbar.js";
import {EPageType} from "../../../enums/EPageType.js";

export class SettingsPage extends Page {

    constructor(props) {
        super(props);
        document.addTabsListeners(this, EPageType.SETTINGS.tabs);
    }

    fillElements(props) {

        if (!props.tab) {
            props.tab = ESettingsPageTabs.PROJECT;
        }

        const header = new Header({pageType: this.getType()});
        this.elements.push(header);

        const toolbar = new SettingsToolbar({tab: props.tab});
        const container = new SettingsContainer({tab: props.tab});


        const panel = new Div({
            elements: [toolbar, container]
        }).setStyle("container");

        this.elements.push(panel);
    }

    tabChangeNotify(tab) {
        this.elements = [];
        this.fillElements({tab: tab});
        this.openPage();
    }
}