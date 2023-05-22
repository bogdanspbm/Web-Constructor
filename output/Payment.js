export class Payment {
#statusid;
#creationdate;
#id;
#value;
#typeid;
constructor(json) {
this.#id = json.id;
this.#value = json.value;
this.#typeid = json.typeid;
this.#statusid = json.statusid;
this.#creationdate = json.creationdate;
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
gettypeid() {
return this.#typeid;
}
}
export class PaymentAdapter{
getPayments(){}
getPayment(id){}
updatePayment(payment){}
createPayment(payment){}
}