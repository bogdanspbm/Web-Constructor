import * as library from "./../../library/RequestLibrary.js"
export class Payment {
#value;
#typeID;
#statusID;
#creationDate;
#id;
constructor(json) {
this.#statusID = json.statusID;
this.#creationDate = json.creationDate;
this.#id = json.id;
this.#value = json.value;
this.#typeID = json.typeID;
}
getID() {
return this.#id;
}
getValue() {
return this.#value;
}
getTypeID() {
return this.#typeID;
}
getStatusID() {
return this.#statusID;
}
getCreationDate() {
return this.#creationDate;
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