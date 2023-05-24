import * as library from "./../../library/RequestLibrary.js"
export class OrderItem {
#defaultPrice;
#discount;
#finalPrice;
#id;
#orderID;
#itemID;
#quantity;
constructor(json) {
this.#discount = json.discount;
this.#finalPrice = json.finalPrice;
this.#id = json.id;
this.#orderID = json.orderID;
this.#itemID = json.itemID;
this.#quantity = json.quantity;
this.#defaultPrice = json.defaultPrice;
}
getFinalPrice() {
return this.#finalPrice;
}
getID() {
return this.#id;
}
getOrderID() {
return this.#orderID;
}
getItemID() {
return this.#itemID;
}
getQuantity() {
return this.#quantity;
}
getDefaultPrice() {
return this.#defaultPrice;
}
getDiscount() {
return this.#discount;
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