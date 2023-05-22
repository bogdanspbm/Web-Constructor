export class Payment {
#typeid;
#statusid;
#creationdate;
#id;
#value;
constructor(json) {
this.#id = json.id;
this.#value = json.value;
this.#typeid = json.typeid;
this.#statusid = json.statusid;
this.#creationdate = json.creationdate;
}
gettypeid() {
return this.#typeid;
}
getstatusid() {
return this.#statusid;
}
getcreationdate() {
return this.#creationdate;
}
getid() {
return this.#id;
}
getvalue() {
return this.#value;
}
}
export class PaymentAdapter{
getPayments(){}
getPayment(id){}
updatePayment(payment){}
createPayment(payment){}
}