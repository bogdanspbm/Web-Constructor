import {DOM} from "../../../elements/dom/DOM.js";
import {Input} from "../../common/Input.js";

export class TextDetail extends DOM {
    createElement() {
        this.element = document.createElement("div")
        this.setStyle("detail-block")
        this.setAttribute("padding-top", "6px").setAttribute("padding-bottom", "16px")

        this.header = new DOM().setText("Text").setStyle("sub-sub-header")
        this.append(this.header)

        this.input = new Input()

        this.input.setOnChangeEvent(function (event) {
            const value = event.target.value
            document.selected.setText(value)
        })

        this.append(this.input)
        this.setInitText()
    }

    setInitText() {
        if (document.selected === undefined) {
            return
        }

        const text = document.selected.savedText
        this.input.element.value = text
    }
}
