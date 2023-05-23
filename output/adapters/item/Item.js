import * as library from "../../library/RequestLibrary.js"
export class Item {
#tags;
#id;
#name;
#price;
#description;
#images;
constructor(json) {
this.#description = json.description;
this.#images = json.images;
this.#tags = json.tags;
this.#id = json.id;
this.#name = json.name;
this.#price = json.price;
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
getID() {
return this.#id;
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