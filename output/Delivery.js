export class Delivery {
#addressid;
#targetdate;
#typeid;
#id;
#orderid;
constructor(json) {
this.#id = json.id;
this.#orderid = json.orderid;
this.#addressid = json.addressid;
this.#targetdate = json.targetdate;
this.#typeid = json.typeid;
}
getorderid() {
return this.#orderid;
}
getaddressid() {
return this.#addressid;
}
gettargetdate() {
return this.#targetdate;
}
gettypeid() {
return this.#typeid;
}
getid() {
return this.#id;
}
}
export class DeliveryAdapter{
getDeliverys(){}
getDelivery(id){}
updateDelivery(delivery){}
createDelivery(delivery){}
}