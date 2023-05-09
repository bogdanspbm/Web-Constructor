import {Tab} from "../../../../../../elements/default/Tabs.js";
import {TextDetail} from "../../inputs/TextDetail.js";
import {AttributeSelector} from "../../inputs/AttributeSelector.js";
import {AttributeDetail} from "../../inputs/AttributeDetail.js";

export class DetailsTab extends Tab {
    constructor(widget) {
        super("Details", widget);
    }

    /**
     * @param {String} name
     * @param {WidgetStructure} widget
     */

    createElement(name, widget) {
        this.widgetStructure = widget;
        super.createElement(name, widget);
        this.setAttribute("padding", "15px");
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

        if (!structure) {
            return;
        }

        const textDetails = new TextDetail(structure).setHint("Enter text");
        this.append(textDetails);

        const attributeDetails = new AttributeDetail(structure, this.widgetStructure);
        this.append(attributeDetails);
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