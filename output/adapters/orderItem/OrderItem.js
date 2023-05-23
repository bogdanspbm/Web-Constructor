import * as library from "./../../library/RequestLibrary.js"
export class OrderItem {
#finalPrice;
#id;
#orderID;
#itemID;
#quantity;
#defaultPrice;
#discount;
constructor(json) {
this.#id = json.id;
this.#orderID = json.orderID;
this.#itemID = json.itemID;
this.#quantity = json.quantity;
this.#defaultPrice = json.defaultPrice;
this.#discount = json.discount;
this.#finalPrice = json.finalPrice;
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