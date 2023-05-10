import {CollectionStructure} from "../objects/CollectionStructure.js";

export function bindCollectionListener() {
    document.collections = {};

    document.openCollection = function (collection) {
        document.collection = collection
        notifyCollectionChangeListener(collection)
    }

    document.findCollectionByName = function (name) {
        let result = undefined;
        Object.entries(document.collections).forEach(([key, attribute]) => {
            const collection = document.collections[key];
            if (collection.getName() === name) {
                result = collection;
                return result;
            }
        });
        return result;
    }

    /**
     * @param {UpdateStructure} update
     */
    document.updateCollection = function (update) {
        const collection = update.getElement();
        document.collections[collection.getUID()] = collection
        notifyCollectionChangeListener(update)
    }

    document.createCollection = function () {
        const collection = new CollectionStructure();
        document.collections[collection.getUID()] = collection;
        notifyCollectionCreateListener(collection);
        return collection;
    }

    document.collectionListeners = [];
    document.addCollectionListener = addCollectionListener
}

function addCollectionListener(listener) {
    document.collectionListeners.push(listener)
}

/**
 * @param {UpdateStructure} update
 */
function notifyCollectionChangeListener(update) {
    for (let i = 0; i < document.collectionListeners.length; i++) {
        const listener = document.collectionListeners[i];
        if (typeof listener.collectionChangeNotify === "function") {
            listener.collectionChangeNotify(update);
        }
    }
}

function notifyCollectionCreateListener(event) {
    for (let i = 0; i < document.collectionListeners.length; i++) {
        const listener = document.collectionListeners[i];
        if (typeof listener.collectionCreateNotify === "function") {
            listener.collectionCreateNotify(event);
        }
    }
}