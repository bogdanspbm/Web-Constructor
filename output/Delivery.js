export class Delivery {
#orderid;
#addressid;
#targetdate;
#typeid;
#id;
constructor(json) {
this.#addressid = json.addressid;
this.#targetdate = json.targetdate;
this.#typeid = json.typeid;
this.#id = json.id;
this.#orderid = json.orderid;
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
getorderid() {
return this.#orderid;
}
getaddressid() {
return this.#addressid;
}
}
export class DeliveryAdapter{
getDeliverys(){}
getDelivery(id){}
updateDelivery(delivery){}
createDelivery(delivery){}
}