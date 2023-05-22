export class Item {
#id;
#name;
#price;
#description;
#images;
#tags;
constructor(json) {
this.#id = json.id;
this.#name = json.name;
this.#price = json.price;
this.#description = json.description;
this.#images = json.images;
this.#tags = json.tags;
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