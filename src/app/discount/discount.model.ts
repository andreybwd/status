import {Service} from "../+service/service.model";

export class Discount {
	id : number;
	name : string = "";
	Services : Service[] = [];
	amount : number;
	date : Date;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
