import {Service} from '../../+service/service.model';

export class DoctorServiceModel {
	id : number;
	Service : Service = new Service;
	is_perform : boolean = false;
	is_assign : boolean = false;
	is_control : boolean = false;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
