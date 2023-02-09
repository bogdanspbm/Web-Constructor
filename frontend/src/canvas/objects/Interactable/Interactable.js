export class Interactable {

    isSelected() {
        return document.selected === this;
    }

    select() {

        if (document.selected !== undefined && document.selected instanceof Interactable) {
            document.selected.unselectEvent()
        }

        document.selected = this;
        this.selectEvent()
    }

    addSelectEvent(event) {
        this.selectEvent = event
    }

    addUnselectEvent(event) {
        this.unselectEvent = event
    }

    addClickEvent(event) {
        this.clickEvent = event
    }

    addOverlapEvent(event) {
        this.overlapEvent = event
    }

    addDragEvent(event) {
        this.dragEvent = event
    }

    addDragStopEvent(event) {
        this.dragStopEvent = event
    }


    addDragStartEvent(event) {
        this.dragStartEvent = event
    }
}