export class OrderItem {
#orderID;
#itemID;
#quantity;
#defaultPrice;
#discount;
#finalPrice;
#id;
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
export class OrderItemAdapter{
getOrderItems(){}
getOrderItem(id){}
updateOrderItem(orderItem){}
createOrderItem(orderItem){}
}