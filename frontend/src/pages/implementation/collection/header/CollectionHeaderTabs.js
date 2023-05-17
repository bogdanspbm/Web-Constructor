import {DOM} from "../../../../elements/dom/DOM.js";
import {HeaderButton} from "../../../../widgets/header/inputs/HeaderButton.js";

export class CollectionHeaderTabs extends DOM {

    createElement() {
        super.createElement();

        this.setStyle("collection-header-tabs");
        const tableTab = new HeaderButton("./../resources/icons/ic_table_24x24.svg");
        this.append(tableTab);

        const codeTab = new HeaderButton("./../resources/icons/ic_script_24x24.svg");
        this.append(codeTab);
    }
}