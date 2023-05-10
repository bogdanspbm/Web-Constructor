import {EditorPage} from "../pages/implementation/editor/EditorPage.js";
import {WidgetStructure} from "../objects/WidgetStructure.js";

export function bindWidgetListener() {
    document.widgets = {};

    document.openWidget = function (widget) {
        document.widget = widget
        const editorPage = new EditorPage(widget)
        editorPage.openPage()
    }

    /**
     * @param {UpdateStructure} update
     */
    document.updateWidget = function (update) {
        const widget = update.getElement();
        document.widgets[widget.getUID()] = widget
        notifyWidgetChangeListener(update)
    }

    document.createWidget = function () {
        const widget = new WidgetStructure();
        document.widgets[widget.getUID()] = widget;
        notifyWidgetCreateListener(widget);
        return widget;
    }

    document.widgetListener = [];
    document.addWidgetListener = addWidgetListener
}

function addWidgetListener(listener) {
    document.widgetListener.push(listener)
}

/**
 * @param {UpdateStructure} update
 */
function notifyWidgetChangeListener(update) {
    for (let i = 0; i < document.widgetListener.length; i++) {
        const listener = document.widgetListener[i];
        if (typeof listener.widgetChangeNotify === "function") {
            listener.widgetChangeNotify(update);
        }
    }
}

/**
 * @param {WidgetStructure} widget
 */
function notifyWidgetCreateListener(widget) {
    for (let i = 0; i < document.widgetListener.length; i++) {
        const listener = document.widgetListener[i];
        if (typeof listener.widgetCreateNotify === "function") {
            listener.widgetCreateNotify(widget);
        }
    }
}