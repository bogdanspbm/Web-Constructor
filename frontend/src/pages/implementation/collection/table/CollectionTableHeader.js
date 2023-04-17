import {DOM} from "../../../../elements/dom/DOM.js";

export class CollectionTableHeader extends DOM {
    createElement() {
        super.createElement();
        this.setStyle("collection-table-header")

        const nameText = new DOM().setText("Name").setAttribute("margin-left", "66px").setStyle("collection-header-text")
        this.append(nameText)

        const tooltipText = new DOM().setText("Tooltip").setAttribute("margin-left", "128px").setStyle("collection-header-text")
        this.append(tooltipText)

        const defaulText = new DOM().setText("Default").setAttribute("margin-left", "128px").setStyle("collection-header-text")
        this.append(defaulText)

        const typeText = new DOM().setText("Type").setAttribute("margin-left", "128px").setStyle("collection-header-text")
        this.append(typeText)

        const containerText = new DOM().setText("Container").setAttribute("margin-left", "128px").setStyle("collection-header-text")
        this.append(containerText)
    }
}