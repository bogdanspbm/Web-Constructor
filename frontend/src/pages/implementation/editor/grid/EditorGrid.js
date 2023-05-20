import {Grid} from "../../../../grid/Grid.js";
import {EUpdateType} from "../../../../enums/EUpdateType.js";

export class EditorGrid extends Grid {

    #widget

    constructor(props) {
        super(props);
        this.#widget = props.widget;
        document.addWidgetListener(this);
        this.fillGridWithElement(props.widget.getElements());
    }

    createElement(props) {
        super.createElement(props);
        this.setStyle("grid").setID("canvas");
    }

    /**
     * @param {Map} elements
     */
    fillGridWithElement(elements) {
        Object.entries(elements).forEach(([key, value]) => {
            const block = this.getBlockByPosition(value.getPosition());

            if (block !== null) {
                block.append(value.generateElement());
            }
        });

    }

    /**
     * @param {UpdateStructure} update
     */
    widgetChangeNotify(update) {

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