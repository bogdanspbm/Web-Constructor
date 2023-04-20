export class CollectionStructure {

    #uid
    #name
    #attributes

    constructor() {
        this.#name = "New Collection"
        this.#attributes = []
        this.#uid = Math.random().toString().replace("0.", "")
    }

    getName() {
        return this.#name
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.#name = name
    }


    getUID() {
        return this.#uid
    }

    /**
     * @param {AttributeStructure} attribute
     */
    addAttribute(attribute) {
        this.#attributes[attribute.getUID()] = attribute;
        document.updateCollection(this);
    }

    getAttributes() {
        return this.#attributes;
    }
}