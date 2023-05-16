import {ScriptStructure} from "../objects/ScriptStructure.js";

export function bindScriptListener() {
    document.scriptsStructures = {};

    document.createScript = function () {
        const script = new ScriptStructure();
        document.scriptsStructures[script.getUID()] = script;
        notifyScriptCreateListener(script);
        return script;
    }

    document.updateScript = function (update) {
        const script = update.getElement();
        document.scriptsStructures[script.getUID()] = script;
        notifyScriptUpdateListener(update);
    }

    document.scriptListeners = [];
    document.addScriptListener = addScriptListener;
}

function addScriptListener(listener) {
    document.scriptListeners.push(listener)
}

function notifyScriptCreateListener(script) {
    for (let i = 0; i < document.scriptListeners.length; i++) {
        const listener = document.scriptListeners[i];
        if (typeof listener.scriptCreateNotify === "function") {
            listener.scriptCreateNotify(script);
        }
    }
}

function notifyScriptUpdateListener(update) {
    for (let i = 0; i < document.scriptListeners.length; i++) {
        const listener = document.scriptListeners[i];
        if (typeof listener.scriptUpdateNotify === "function") {
            listener.scriptUpdateNotify(update);
        }
    }
}