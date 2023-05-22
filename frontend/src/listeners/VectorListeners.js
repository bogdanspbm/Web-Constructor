import {VectorStructure} from "../objects/VectorStructure.js";

export function bindVectorListener() {
    document.vectorsStructures = {};

    document.createVector = function (base64) {
        const vector = new VectorStructure(base64);
        document.vectorsStructures[vector.getUID()] = vector;
        notifyVectorCreateListener(vector);
        return vector;
    }

    document.updateVector = function (update) {
        const vector = update.getElement();
        document.vectorsStructures[vector.getUID()] = vector;
        notifyVectorUpdateListener(update);
    }

    document.vectorListeners = [];
    document.addVectorListener = addVectorListener;
}

function addVectorListener(listener) {
    document.vectorListeners.push(listener)
}

function notifyVectorCreateListener(vector) {
    for (let i = 0; i < document.vectorListeners.length; i++) {
        const listener = document.vectorListeners[i];
        if (typeof listener.vectorCreateNotify === "function") {
            listener.vectorCreateNotify(vector);
        }
    }
}

function notifyVectorUpdateListener(update) {
    for (let i = 0; i < document.vectorListeners.length; i++) {
        const listener = document.vectorListeners[i];
        if (typeof listener.vectorUpdateNotify === "function") {
            listener.vectorUpdateNotify(update);
        }
    }
}