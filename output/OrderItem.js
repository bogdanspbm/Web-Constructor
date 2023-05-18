export class OrderItem {
#quantity;
#defaultprice;
#discount;
#finalprice;
#id;
#orderid;
#itemid;
constructor(json) {
this.#id = json.id;
this.#orderid = json.orderid;
this.#itemid = json.itemid;
this.#quantity = json.quantity;
this.#defaultprice = json.defaultprice;
this.#discount = json.discount;
this.#finalprice = json.finalprice;
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
getorderid() {
return this.#orderid;
}
getitemid() {
return this.#itemid;
}
}
export class OrderItemAdapter{
getOrderItems(){}
getOrderItem(id){}
updateOrderItem(orderitem){}
createOrderItem(orderitem){}
}