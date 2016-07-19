import {Specialty} from "../../+specialty/specialty.model";

export class DoctorSpecialty {
	id : number;
	Specialty : Specialty = new Specialty;
	category : number;
	date_training : Date;
	date_category : Date;
	is_main : boolean = false;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
