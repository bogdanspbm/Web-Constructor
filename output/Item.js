export class Item {
#tags;
#id;
#name;
#price;
#description;
#images;
constructor(json) {
this.#id = json.id;
this.#name = json.name;
this.#price = json.price;
this.#description = json.description;
this.#images = json.images;
this.#tags = json.tags;
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
getimages() {
return this.#images;
}
gettags() {
return this.#tags;
}
}
export class ItemAdapter{
getItems(){}
getItem(id){}
updateItem(item){}
createItem(item){}
}