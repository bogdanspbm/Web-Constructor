import {Page} from "../../Page.js";
import {Header} from "../../../widgets/header/Header.js";
import {Div} from "../../../elements/dom/DOM.js";
import {CollectionToolbar} from "./toolbar/CollectionToolbar.js";
import {CollectionContainer} from "./container/CollectionContainer.js";
import {EPageType} from "../../../enums/EPageType.js";
import {ECollectionPageTabs} from "./header/CollectionHeaderTabs.js";
import {ScriptsContainer} from "../scripts/container/ScriptsContainer.js";
import {CollectionScriptStructure} from "../../../objects/scripts/implementation/CollectionScriptStructure.js";

export class CollectionPage extends Page {


    constructor(props) {
        super(props);
        document.addTabsListeners(this, EPageType.COLLECTION.tabs);
    }


    fillElements(props) {
        this.collection = props.structure;
        const header = new Header({pageType: this.getType()});
        this.elements.push(header);

        const toolbar = new CollectionToolbar({collection: props.structure});

        let container;

        if (this.openedTab === ECollectionPageTabs.TABLE || !this.openedTab) {
            container = new CollectionContainer({collection: props.structure});
        } else {
            container = new ScriptsContainer({
                script: props.structure.getScript(), event: () => {
                    const newScript = new CollectionScriptStructure(props.structure.getName());
                    props.structure.script = newScript;
                    return newScript;
                }
            });
        }

        const panel = new Div({
            elements: [
                toolbar,
                container
            ]
        }).setStyle("container");

        this.elements.push(panel);
    }

    tabChangeNotify(tabType) {
        this.openedTab = tabType;
        this.elements = [];
        this.fillElements({structure: this.collection});
        this.openPage();
    }

}