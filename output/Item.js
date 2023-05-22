export class Item {
#name;
#price;
#description;
#images;
#tags;
#id;
constructor(json) {
this.#images = json.images;
this.#tags = json.tags;
this.#id = json.id;
this.#name = json.name;
this.#price = json.price;
this.#description = json.description;
}
getimages() {
return this.#images;
}
gettags() {
return this.#tags;
}
getid() {
return this.#id;
}
getname() {
return this.#name;
}
getprice() {
return this.#price;
}
getdescription() {
return this.#description;
}
}
export class ItemAdapter{
getItems(){}
getItem(id){}
updateItem(item){}
createItem(item){}
}