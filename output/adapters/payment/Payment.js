import * as library from "./../../library/RequestLibrary.js"
export class Payment {
#value;
#typeID;
#statusID;
#creationDate;
#id;
constructor(json) {
this.#id = json.id;
this.#value = json.value;
this.#typeID = json.typeID;
this.#statusID = json.statusID;
this.#creationDate = json.creationDate;
}
getStatusID() {
return this.#statusID;
}
getCreationDate() {
return this.#creationDate;
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