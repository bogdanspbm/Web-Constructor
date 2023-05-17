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
            "    get" + name + "s() {\n" +
            "       //  Implement me! \n" +
            "    }\n" +
            "\n" +
            "    get" + name + "(id) {\n" +
            "       //  Implement me! \n" +
            "    }\n" +
            "\n" +
            "    update" + name + "(item) {\n" +
            "       //  Implement me! \n" +
            "    }\n" +
            "\n" +
            "    create" + name + "(item) {\n" +
            "       //  Implement me! \n" +
            "    }\n\n" +
            "}";
    }
}