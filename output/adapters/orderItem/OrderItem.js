export class OrderItem {
#discount;
#finalPrice;
#id;
#orderID;
#itemID;
#quantity;
#defaultPrice;
constructor(json) {
this.#finalPrice = json.finalPrice;
this.#id = json.id;
this.#orderID = json.orderID;
this.#itemID = json.itemID;
this.#quantity = json.quantity;
this.#defaultPrice = json.defaultPrice;
this.#discount = json.discount;
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
getQuantity() {
return this.#quantity;
}
}
export class OrderItemAdapter{
getOrderItems(){}
getOrderItem(id){}
updateOrderItem(orderItem){}
createOrderItem(orderItem){}
}