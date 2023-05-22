export class Item {
#tags;
#id;
#name;
#price;
#description;
#images;
constructor(json) {
this.#name = json.name;
this.#price = json.price;
this.#description = json.description;
this.#images = json.images;
this.#tags = json.tags;
this.#id = json.id;
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
export class ItemAdapter{
getItems(){}
getItem(id){}
updateItem(item){}
createItem(item){}
}