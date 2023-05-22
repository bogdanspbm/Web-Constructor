import {ScriptStructure} from "../ScriptStructure.js";
import {toPascalCase} from "../../../utils/Utils.js";

export class CollectionScriptStructure extends ScriptStructure {

    constructor(collectionName) {
        super();
        this.body = this.generateEmptyBody(collectionName);
    }

    generateEmptyBody(collectionName) {
        const name = toPascalCase(collectionName);

        return "export class " + name + "Adapter {\n\n" +
            "    getRows() {\n" +
            "       //  Implement me! \n" +
            "    }\n" +
            "\n" +
            "    getRowByID(id) {\n" +
            "       //  Implement me! \n" +
            "    }\n" +
            "\n" +
            "    updateRow(item) {\n" +
            "       //  Implement me! \n" +
            "    }\n" +
            "\n" +
            "    createRow(item) {\n" +
            "       //  Implement me! \n" +
            "    }\n\n" +
            "}";
    }
}