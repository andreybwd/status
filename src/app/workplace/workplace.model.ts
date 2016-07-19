import { Service } from '../+service/service.model';

export class Workplace {
	id : number;
	name : string = "";
	Services : Service[] = [];
	house : number;
	floor : number;
	room : number;
	is_active : boolean = false;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
