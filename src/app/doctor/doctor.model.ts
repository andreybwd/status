import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { DoctorGroup } from "./group/doctor-group.model";
import { DoctorSpecialty } from "./specialty/doctor-specialty.model";
import { DoctorServiceModel } from "./service/doctor-service.model";

export class Doctor {
	id : number;
	$key : string = "";
	first_name : string = "";
	last_name : string = "";
	middle_name : string = "";
	group_key: string = "";
	$Group : DoctorGroup = new DoctorGroup;
	code : string = "";
	birth_date : Date = new Date;
	sex : number;
	color : string = "";
	doctor_specialty_keys : string[] = [];
	$DoctorSpecialty : DoctorSpecialty[] = [];
	doctor_service_keys : string[] = [];
	$DoctorService : DoctorServiceModel[] = [];
	
	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
