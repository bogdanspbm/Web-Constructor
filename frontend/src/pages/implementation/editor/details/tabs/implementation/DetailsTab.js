import {Tab} from "../../../../../../elements/default/Tabs.js";
import {TextDetail} from "../../inputs/TextDetail.js";

export class DetailsTab extends Tab {
    constructor() {
        super("Details");
    }

    createElement() {
        super.createElement();
        this.generateEditors();
        document.addSelectListener(this);
    }

    clear() {
        for (let i = this.children.length; i >= 0; i--) {
            const child = this.children[i]
            if (child === undefined) {
                continue
            }
            child.removeParent();
        }
    }

    /**
     * @param {ComponentStructure} structure
     */
    generateEditors(structure) {

        if (structure === undefined) {
            return;
        }

        this.textDetails = new TextDetail(structure);
        this.append(this.textDetails);
    }


    /**
     * @param {Component} element
     */
    selectNotify(element) {

        this.clear();

        if (element === undefined) {
            return;
        }

        this.generateEditors(element.getParentStructure());
    }
}