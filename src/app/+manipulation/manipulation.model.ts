import {Service} from "../+service/service.model";

export class Manipulation {
	id : number;
	Service: Service = new Service();
	Manipulations: Service[] = [];

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
