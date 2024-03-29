import {FileStructure} from "../FileStructure.js";
import {EFileType} from "../../../enums/EFileType.js";
import {VectorPage} from "../../../pages/implementation/vector/VectorPage.js";
import {EPageType} from "../../../enums/EPageType.js";

export class VectorFile extends FileStructure {
    type = EFileType.VECTOR;
    vector;

    /**
     * @param {VectorStructure} vector
     */
    constructor(vector) {
        super(vector);
        this.vector = vector;
    }

    toJSON() {
        return {
            uid: this.getUID(),
            type: this.type,
            structure: this.getStructure()
        }
    }

    openAction(event) {
        const page = new VectorPage({structure: this.vector, type: EPageType.VECTOR});
        page.openPage();
    }


    getUID() {
        return this.vector.getUID();
    }

    getType() {
        return this.type;
    }
}