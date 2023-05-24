import * as library from "./../../library/RequestLibrary.js"
export class Order {
#modificationDate;
#id;
#displayNumber;
#userID;
#statusID;
#cancelReasonID;
#paymentID;
#creationDate;
constructor(json) {
this.#id = json.id;
this.#displayNumber = json.displayNumber;
this.#userID = json.userID;
this.#statusID = json.statusID;
this.#cancelReasonID = json.cancelReasonID;
this.#paymentID = json.paymentID;
this.#creationDate = json.creationDate;
this.#modificationDate = json.modificationDate;
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
getCancelReasonID() {
return this.#cancelReasonID;
}
getPaymentID() {
return this.#paymentID;
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