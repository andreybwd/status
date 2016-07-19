import { ServiceType }  from "./type/type.model";

export class Service {
	id : number;
	name : string = "";
	Type : ServiceType = new ServiceType();
	duration : number;
	short_name : string = "";
	code : string = "";
	price : number;
	payment_appoint : number = null;
	payment_perform : number = null;
	payment_check : number = null;
	description : string = "";

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
