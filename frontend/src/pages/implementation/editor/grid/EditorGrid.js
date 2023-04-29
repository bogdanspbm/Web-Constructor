import {Grid} from "../../../../grid/Grid.js";
import {EUpdateType} from "../../../../enums/EUpdateType.js";

export class EditorGrid extends Grid {

    #widget

    /**
     * @param {WidgetStructure} widget
     */
    constructor(widget) {
        super(widget);
        this.#widget = widget;
        document.addWidgetListener(this);
        this.fillGridWithElement(widget.getElements());
    }

    /**
     * @param {WidgetStructure} widget
     */
    createElement(widget) {
        super.createElement(widget);
        this.setStyle("grid").setID("canvas");
    }

    /**
     * @param {Map} elements
     */
    fillGridWithElement(elements) {
        Object.entries(elements).forEach(([key, value]) => {
            const block = this.getBlockByPosition(value.getPosition());

            console.log(block)

            if (block !== null) {
                block.append(value.generateElement());
            }
        });

    }

    /**
     * @param {UpdateStructure} update
     */
    widgetChangeNotify(update) {
        console.log(update);

        if (update.getElement().getUID() !== this.#widget.getUID()) {
            return;
        }

        if (update.getType() === EUpdateType.INSERT) {
            this.insertElementListener(update.getValue());
        }
    }

    /**
     * @param {WidgetStructure} widget
     */
    widgetCreateNotify(widget) {
    }

    /**
     * @param {ComponentStructure} element
     */
    insertElementListener(element) {
        this.append(element.generateElement());
    }
}