import {CollectionStructure} from "../objects/CollectionStructure.js";
import {createFileFromJSON} from "./FileUtils.js";
import {WidgetStructure} from "../objects/WidgetStructure.js";
import {FileSystemPage} from "../pages/implementation/filesystem/FileSystemPage.js";
import {ScriptStructure} from "../objects/scripts/ScriptStructure.js";
import {EPageType} from "../enums/EPageType.js";
import {VectorStructure} from "../objects/VectorStructure.js";
import {GroupStructure} from "../objects/GroupStructure.js";

export function postRequest(url, body) {
    const http = new XMLHttpRequest();
    http.responseType = "blob"
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState != 4 || http.status != 200) {
            return;
        }

        const result = http.response;
        createAndDownloadFile(result, "project.zip")
    }
    http.send(body);
}


export function toPascalCase(str) {
    str = str.trim().toLowerCase();

    const words = str.split(/\s+|_/);

    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    const pascalCaseStr = capitalizedWords.join('');

    return pascalCaseStr;
}

export function exportProject() {
    const json = {
        projectInfo: document.projectInfo,
        collections: document.collections,
        widgets: document.widgets,
        scripts: document.scriptsStructures,
        vectors: document.vectorsStructures,
        groups: document.groupsStructures,
    }

    const data = JSON.stringify(json, null, 4);

    const url = new URL(window.location.href);
    const baseUrl = url.origin.replace(/:\d+$/, '');
    console.log(baseUrl + ":8080/export");
    postRequest(baseUrl + ":8080/export", data);
}

export function createAndDownloadFile(data, filename, options) {
    const blob = new Blob([data], options);
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}

export function saveProject() {
    const json = {
        projectInfo: document.projectInfo,
        collections: document.collections,
        widgets: document.widgets,
        scripts: document.scriptsStructures,
        files: document.files,
        vectors: document.vectorsStructures,
        groups: document.groupsStructures,
    }

    const data = JSON.stringify(json, null, 4);
    createAndDownloadFile(data, "project.json");
}

export function loadProject() {
    const uploadFunction = function () {
        return new Promise(function (resolve, reject) {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';

            fileInput.addEventListener('change', function () {
                const file = fileInput.files[0];
                const reader = new FileReader();

                reader.onload = function (event) {
                    const contents = event.target.result;
                    resolve(contents); // Resolve with the file contents as a string
                };

                reader.onerror = function (event) {
                    reject(event.target.error); // Reject with the error object
                };

                reader.readAsText(file);
            });

            fileInput.click();
        });
    };

    document.forceDeletePopup();

    uploadFunction().then(function (contents) {
        const json = JSON.parse(contents);
        generateProjectFromJSON(json);
        generateVectorsFromJSON(json);
        generateGroupsFromJSON(json);
        generateCollectionsFromJSON(json);
        generateWidgetsFromJSON(json);
        generateScriptsFromJSON(json);
        generateFilesFromJSON(json);

        const fileSystem = new FileSystemPage({type: EPageType.FILE_SYSTEM});
        fileSystem.openPage();
    }).catch(function (error) {
        console.error(error);
    });
}

export function generateProjectFromJSON(json) {
    document.loadProjectFromJSON(json.projectInfo);
}


export function generateScriptsFromJSON(json) {
    const newScripts = {};

    if (!json.scripts) {
        return;
    }

    Object.entries(json.scripts).forEach(([key, value]) => {
        newScripts[key] = new ScriptStructure(value);
    });
    document.scriptsStructures = newScripts;
}

export function generateWidgetsFromJSON(json) {
    const newWidgets = {};

    if (!json.widgets) {
        return;
    }

    Object.entries(json.widgets).forEach(([key, value]) => {
        newWidgets[key] = new WidgetStructure(value);
    });
    document.widgets = newWidgets;
}

export function generateGroupsFromJSON(json) {
    const newGroups = {};

    if (!json.groups) {
        return;
    }

    Object.entries(json.groups).forEach(([key, value]) => {
        newGroups[key] = new GroupStructure(value);
    });
    document.groupsStructures = newGroups;
}

export function generateVectorsFromJSON(json) {
    const newVectors = {};

    if (!json.vectors) {
        return;
    }

    Object.entries(json.vectors).forEach(([key, value]) => {
        const vectorStructure = new VectorStructure("");
        vectorStructure.buildFromJSON(value);
        newVectors[key] = vectorStructure;
    });

    document.vectorsStructures = newVectors;
}

export function getComplexField(structure, field) {
    const keys = field.split(":");

    let result = structure;
    for (const key of keys) {
        if (result.hasOwnProperty(key)) {
            result = result[key];
        } else {
            return undefined; // Return undefined if the path does not exist
        }
    }

    return result;
}

export function setComplexField(structure, field, value) {
    const keys = field.split(":");

    let obj = structure;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];

        if (!obj.hasOwnProperty(key) || typeof obj[key] !== "object") {
            obj[key] = {};
        }

        obj = obj[key];
    }

    const lastKey = keys[keys.length - 1];
    obj[lastKey] = value;

    return structure;
}

export function generateCollectionsFromJSON(json) {
    const newCollections = {};

    if (!json.collections) {
        return;
    }

    Object.entries(json.collections).forEach(([key, value]) => {
        const collection = new CollectionStructure(value);
        newCollections[key] = collection;
    });
    document.collections = newCollections;
}

export function generateFilesFromJSON(json) {
    const newFiles = {};
    Object.entries(json.files).forEach(([key, value]) => {
        const file = createFileFromJSON(value);
        newFiles[key] = file;
    });
    document.files = newFiles;
}
