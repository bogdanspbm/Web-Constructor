import {Tab} from "../../../../../../elements/default/Tabs.js";
import {TextDetail} from "../../inputs/TextDetail.js";
import {AttributeDetail} from "../../inputs/AttributeDetail.js";

export class DetailsTab extends Tab {
    constructor(props) {
        super({name: "Details", widget: props.widget});
    }

    /**
     * @param {String} name
     * @param {WidgetStructure} widget
     */

    createElement(props) {
        this.widgetStructure = props.widget;
        super.createElement(props);
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

        const textDetails = new TextDetail({structure: structure}).setHint("Enter text");
        this.append(textDetails);

        const attributeDetails = new AttributeDetail({structure: structure, widget: this.widgetStructure});
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