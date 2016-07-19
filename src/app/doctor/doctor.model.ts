import {DoctorGroup} from "./group/doctor-group.model";
import {DoctorSpecialty} from "./specialty/doctor-specialty.model";
import {DoctorServiceModel} from "./service/doctor-service.model";

export class Doctor {
	id : number;
	first_name : string = "";
	last_name : string = "";
	middle_name : string = "";
	Group : DoctorGroup = new DoctorGroup;
	code : string = "";
	birth_date : Date = new Date;
	sex : number;
	color : string = "";
	Specialty : DoctorSpecialty[] = [];
	Service : DoctorServiceModel[] = [];
	
	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
