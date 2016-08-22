import { ServiceType }  from "./type/type.model";

export class Service {
	id : number;
	$key : string = "";
	name : string = "";
	$Type : ServiceType;
	type_key : string = "";
	duration : number;
	short_name : string = "";
	code : string = "";
	price : number;
	payment_appoint : number;
	payment_perform : number;
	payment_check : number;
	description : string = "";

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
