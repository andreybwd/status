import {Service} from '../../+service/service.model';

export class DoctorServiceModel {
	id : number;
	$key : string = "";
	service_key : string = "";
	$Service : Service;
	duration : number;
	is_perform : boolean = false;
	is_assign : boolean = false;
	is_control : boolean = false;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
