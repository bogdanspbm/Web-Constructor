import * as library from "./../../library/RequestLibrary.js"
export class Delivery {
#id;
#orderID;
#addressID;
#targetDate;
#typeID;
constructor(json) {
this.#id = json.id;
this.#orderID = json.orderID;
this.#addressID = json.addressID;
this.#targetDate = json.targetDate;
this.#typeID = json.typeID;
}
getTypeID() {
return this.#typeID;
}
getID() {
return this.#id;
}
getOrderID() {
return this.#orderID;
}
getAddressID() {
return this.#addressID;
}
getTargetDate() {
return this.#targetDate;
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