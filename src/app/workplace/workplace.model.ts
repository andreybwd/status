import { Service } from '../+service/service.model';

export class Workplace {
	id : number;
	$key : string = "";
	name : string = "";
	service_keys : string[] = [];
	$Services : Service[];
	house : string = "";
	floor : number;
	room : number;
	is_active : boolean = true;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
