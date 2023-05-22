export class Delivery {
#id;
#orderid;
#addressid;
#targetdate;
#typeid;
constructor(json) {
this.#orderid = json.orderid;
this.#addressid = json.addressid;
this.#targetdate = json.targetdate;
this.#typeid = json.typeid;
this.#id = json.id;
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
getorderid() {
return this.#orderid;
}
}
export class DeliveryAdapter{
getDeliverys(){}
getDelivery(id){}
updateDelivery(delivery){}
createDelivery(delivery){}
}