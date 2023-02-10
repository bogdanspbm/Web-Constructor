export class Interactable {

    overlapEvent = () => {
        console.log("[overlapEvent] Method isn't implemented")
    }
    overlapEndEvent = () => {
        console.log("[overlapEndEvent] Method isn't implemented")
    }

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

    isOverlapped(event) {
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

    addOverlapEndEvent(event) {
        this.overlapEndEvent = event
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