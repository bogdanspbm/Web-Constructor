import {DOM} from "../../../../elements/dom/DOM.js";
import {Icon} from "../../../../elements/icon/Icon.js";
import {Button} from "../../../../elements/default/Button.js";

export class CollectionButton extends Button {

    /**
     * @param {Collection} collection
     */
    constructor(collection) {
        super();

        if (collection === undefined) {
            collection = new CollectionStructure()
        }

        this.collection = collection
        this.setText(collection.getName())

        this.registerCollection()

        const parent = this
        this.addClickEvent(() => {
            console.log(parent.collection.getUID())
            document.openCollection(parent.collection)
        })


        // Rename on Double Click
        this.element.addEventListener("dblclick", function (e) {
                if (parent.header.element.innerHTML === "New CollectionStructure") {
                    parent.header.element.innerHTML = ""
                }

                parent.header.setTag("contenteditable", "true")
                parent.header.element.focus()


                parent.header.element.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        const newName = parent.header.element.innerHTML
                        parent.collection.name = newName
                        parent.header.setTag("contenteditable", "false")
                        document.updateCollection(parent.collection)
                    }
                });

                parent.header.element.addEventListener("focusout", (event) => {
                    const newName = parent.header.element.innerHTML
                    parent.collection.name = newName
                    parent.header.setTag("contenteditable", "false")
                    document.updateCollection(parent.collection)
                });
            }
        )
    }

    registerCollection() {
        document.addCollectionListener(this)

        if (document.collection !== undefined) {
            return
        }

    }

    createElement() {
        super.createElement();
        this.setStyle("toolbar-list-button")

        this.logo = new Icon("./../resources/icons/ic_check_16x16.svg").setAttribute("margin-right", "10px").setAttribute("visibility", "hidden")
        this.append(this.logo)

        this.header = new DOM().setStyle("small-header")
        this.append(this.header)
    }

    setText(text) {
        this.header.setText(text)
        return this
    }

    collectionChangeNotify(collection) {
        if (collection.getUID() === this.collection.uid) {
            this.logo.setAttribute("visibility", "visible")
        } else {
            this.logo.setAttribute("visibility", "hidden")
        }
    }
}