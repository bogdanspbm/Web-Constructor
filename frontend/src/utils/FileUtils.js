import {WidgetFile} from "../pages/implementation/filesystem/file/implementations/WidgetFile.js";
import {CollectionFile} from "../pages/implementation/filesystem/file/implementations/CollectionFile.js";
import {DirectoryFile} from "../pages/implementation/filesystem/file/implementations/DirectoryFile.js";
import {EFileType} from "../enums/EFileType.js";


export function createFileFromJSON(json) {
    const structure = document.findStructureByUID(json.structure.uid);
    switch (json.type.name) {
        case EFileType.WIDGET.name: {
            return new WidgetFile(structure);
        }
        case EFileType.COLLECTION.name: {
            return new CollectionFile(structure);
        }

        case EFileType.DIRECTORY.name: {
            return new DirectoryFile(structure);
        }
    }

    console.log("Failed to Create File: " + json);
    return undefined;
}
