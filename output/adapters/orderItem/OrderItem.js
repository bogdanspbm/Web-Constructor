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
this.#orderID = json.orderID;
this.#itemID = json.itemID;
this.#quantity = json.quantity;
this.#defaultPrice = json.defaultPrice;
this.#discount = json.discount;
this.#finalPrice = json.finalPrice;
this.#id = json.id;
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
getDefaultPrice() {
return this.#defaultPrice;
}
}
export class OrderItemAdapter {

    getOrderItems() {
       //  Implement me! 
    }

    getOrderItem(id) {
       //  Implement me! 
    }

    updateOrderItem(item) {
       //  Implement me! 
    }

    createOrderItem(item) {
       //  Implement me! 
    }

}