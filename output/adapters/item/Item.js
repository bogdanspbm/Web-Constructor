import * as library from "./../../library/RequestLibrary.js"
export class Item {
#id;
#name;
#price;
#description;
#images;
#tags;
constructor(json) {
this.#price = json.price;
this.#description = json.description;
this.#images = json.images;
this.#tags = json.tags;
this.#id = json.id;
this.#name = json.name;
}
getID() {
return this.#id;
}
getName() {
return this.#name;
}
getPrice() {
return this.#price;
}
getDescription() {
return this.#description;
}
getImages() {
return this.#images;
}
getTags() {
return this.#tags;
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