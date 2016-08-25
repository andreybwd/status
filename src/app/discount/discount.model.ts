import {Service} from "../+service/service.model";

export class Discount {
	id : number;
	$key : string = "";
	name : string = "";
	services_keys : Array<string> = [];
	$Services : Service[] = [];
	amount : number;
	date : Date;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
