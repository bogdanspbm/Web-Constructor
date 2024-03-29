import {DOM} from "../../../../elements/dom/DOM.js";
import {HeaderButton} from "../../../../widgets/header/implementation/HeaderButton.js";
import {EPageType} from "../../../../enums/EPageType.js";

export const ECollectionPageTabs = Object.freeze({
    TABLE: {
        "name": "TABLE",
    },
    SCRIPT: {
        "name": "SCRIPT",
    },
});

export class CollectionHeaderTabs extends DOM {

    createElement(props) {
        super.createElement(props);

        this.setStyle("collection-header-tabs");
        const tableTab = new HeaderButton({path: "./../resources/icons/ic_table_24x24.svg"});
        tableTab.setClickEvent(() => {
            document.notifyTabListener(EPageType.COLLECTION.tabs, ECollectionPageTabs.TABLE);
        });
        this.append(tableTab);

        const scriptTab = new HeaderButton({path: "./../resources/icons/ic_script_24x24.svg"});
        scriptTab.setClickEvent(() => {
            document.notifyTabListener(EPageType.COLLECTION.tabs, ECollectionPageTabs.SCRIPT);
        });
        this.append(scriptTab);
    }
}