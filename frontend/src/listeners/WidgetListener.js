import {EditorPage} from "../pages/implementation/editor/EditorPage.js";

export function bindWidgetListener() {
    document.widgets = {};

    document.openWidget = function (widget) {
        document.widget = widget
        const editorPage = new EditorPage(widget)
        editorPage.openPage()
    }

    document.updateWidget = function (widget) {
        document.widgets[widget.getUID()] = widget
        notifyWidgetChangeListener(widget)
    }

    document.createWidget = function (widget) {
        document.widgets[widget.getUID()] = widget
        notifyWidgetCreateListener(widget)
    }

    document.widgetListener = [];
    document.addWidgetListener = addWidgetListener
}

function addWidgetListener(listener) {
    document.widgetListener.push(listener)
}

function notifyWidgetChangeListener(widget) {
    for (let i = 0; i < document.widgetListener.length; i++) {
        const listener = document.widgetListener[i];
        if (typeof listener.widgetChangeNotify === "function") {
            listener.widgetChangeNotify(widget);
        }
    }
}

function notifyWidgetCreateListener(widget) {
    for (let i = 0; i < document.widgetListener.length; i++) {
        const listener = document.widgetListener[i];
        if (typeof listener.widgetCreateNotify === "function") {
            listener.widgetCreateNotify(widget);
        }
    }
}