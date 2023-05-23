import * as library from "./../../library/RequestLibrary.js"
export class Item {
#price;
#description;
#images;
#tags;
#id;
#name;
constructor(json) {
this.#id = json.id;
this.#name = json.name;
this.#price = json.price;
this.#description = json.description;
this.#images = json.images;
this.#tags = json.tags;
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
   const response = library.httpGet("http://127.0.0.1:9080/items/");
   const json = JSON.parse(response);
   return json.items;
}

export function getRowByID(id) {
   const response = library.httpGet("http://127.0.0.1:9080/items/" + id);
   const json = JSON.parse(response);
   return json.item;
}

export function updateRow(item) {
   //  Implement me! 
}

export function createRow(item) {
   //  Implement me! 
}