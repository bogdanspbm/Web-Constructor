export class OrderItem {
#orderid;
#itemid;
#quantity;
#defaultprice;
#discount;
#finalprice;
#id;
constructor(json) {
this.#discount = json.discount;
this.#finalprice = json.finalprice;
this.#id = json.id;
this.#orderid = json.orderid;
this.#itemid = json.itemid;
this.#quantity = json.quantity;
this.#defaultprice = json.defaultprice;
}
getorderid() {
return this.#orderid;
}
getitemid() {
return this.#itemid;
}
getquantity() {
return this.#quantity;
}
getdefaultprice() {
return this.#defaultprice;
}
getdiscount() {
return this.#discount;
}
getfinalprice() {
return this.#finalprice;
}
getid() {
return this.#id;
}
}
export class OrderItemAdapter{
getOrderItems(){}
getOrderItem(id){}
updateOrderItem(orderitem){}
createOrderItem(orderitem){}
}