import * as library from "./../../library/RequestLibrary.js"
export class Order {
#creationDate;
#modificationDate;
#id;
#displayNumber;
#userID;
#statusID;
#cancelReasonID;
#paymentID;
constructor(json) {
this.#modificationDate = json.modificationDate;
this.#id = json.id;
this.#displayNumber = json.displayNumber;
this.#userID = json.userID;
this.#statusID = json.statusID;
this.#cancelReasonID = json.cancelReasonID;
this.#paymentID = json.paymentID;
this.#creationDate = json.creationDate;
}
getCancelReasonID() {
return this.#cancelReasonID;
}
getPaymentID() {
return this.#paymentID;
}
getCreationDate() {
return this.#creationDate;
}
getModificationDate() {
return this.#modificationDate;
}
getID() {
return this.#id;
}
getDisplayNumber() {
return this.#displayNumber;
}
getUserID() {
return this.#userID;
}
getStatusID() {
return this.#statusID;
}
}
export function getRows() {
   //  Implement me! 
}

export function getRowByID(id) {
   //  Implement me! 
}

export function updateRow(item) {
   //  Implement me! 
}

export function createRow(item) {
   //  Implement me! 
}