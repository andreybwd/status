import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { AbstractService } from '../common/abstract.service';

import { Doctor } from './doctor.model';
import { DoctorSpecialty } from './specialty/doctor-specialty.model';
import { DoctorServiceModel } from './service/doctor-service.model'

import { DoctorGroupData } from './group/doctor-group.service';
import { DoctorSpecialtyData } from './specialty/doctor-specialty.service';

import { DoctorServiceData } from './service/doctor-service.service';

@Injectable()
export class DoctorService extends AbstractService {
	af_data: FirebaseListObservable<Doctor[]>;
	table : string = "doctors";

	constructor(public af: AngularFire) {
		super();
		this.af_data = this.af.database.list('/' + this.table);
	}

	_getList() : Observable<Doctor[]> {
		let observable = super._getList();

		return observable //.map(items => {
		// 	items.map(item => {
		// 		item.$DoctorSpecialty = [];
		// 		item.doctor_specialty_keys.map(key => {
		// 			let $DoctorSpecialty = this.af.database.object(`/doctors-specialties/${key}`);
		// 			item.$DoctorSpecialty.push($DoctorSpecialty);
		// 		})
		// 		return item;
		// 	});
		// 	return items;
		// });
	}

 //  	getList(): Promise<Doctor[]> {
	//   	return Promise.resolve(DoctorData);
	// }

	// save(doctor: Doctor, doctorSpecialty: DoctorSpecialty): Promise<Doctor> {
	// 	if (doctor.id) {
	// 		return this.update(doctor, doctorSpecialty);
	// 	}
	// 	return this.add(doctor, doctorSpecialty);
	// }

	// update(doctor: Doctor, doctorSpecialty: DoctorSpecialty): Promise<Doctor> {
	// 	let index_specialty = doctor.DoctorSpecialty.findIndex(value => value.id === doctorSpecialty.id)
	// 	if (index_specialty === -1) {
	// 		doctorSpecialty.id = doctor.DoctorSpecialty.length + 1;
	// 		doctor.DoctorSpecialty.push(doctorSpecialty);
	// 	}
	// 	else {
	// 		doctor.DoctorSpecialty[index_specialty] = doctorSpecialty;
	// 	}
	// 	return Promise.resolve(doctor);
	// }

	// add(doctor: Doctor, doctorSpecialty: DoctorSpecialty): Promise<Doctor> {
	// 	doctorSpecialty.id = doctor.DoctorSpecialty.length + 1;
	// 	doctor.DoctorSpecialty.push(doctorSpecialty);

	// 	doctor.id = DoctorData.length + 1;
	// 	DoctorData.push(doctor);
	// 	return Promise.resolve(doctor);
	// }

	// remove(index: number): Promise<number> {
	// 	DoctorData.splice(index, 1);
	// 	return Promise.resolve(index);
	// }

	// saveService(doctor: Doctor, doctorService: DoctorServiceModel): Promise<Doctor> {
	// 	let index_specialty = doctor.DoctorService.findIndex(value => value.id === doctorService.id)
	// 	if (index_specialty === -1) {
	// 		doctorService.id = doctor.DoctorService.length + 1;
	// 		doctor.DoctorService.push(doctorService);
	// 	}
	// 	else {
	// 		doctor.DoctorService[index_specialty] = doctorService;
	// 	}
	// 	return Promise.resolve(doctor);
	// }
}

export const DoctorData : Doctor[] = [
	new Doctor({
		id : 1, 
		first_name : "Хаус", 
		last_name : "Доктор", 
		Group : DoctorGroupData[0], 
		DoctorSpecialty : [DoctorSpecialtyData[0]],
		DoctorService : [
			DoctorServiceData[6],
			DoctorServiceData[7],
			DoctorServiceData[8],
			DoctorServiceData[9],
			DoctorServiceData[10],
			DoctorServiceData[11]
		]
	}),
	new Doctor({
		id : 2, 
		first_name : "Кто", 
		last_name : "Доктор", 
		Group : DoctorGroupData[0], 
		DoctorSpecialty : [DoctorSpecialtyData[1]],
		DoctorService : [DoctorServiceData[0], DoctorServiceData[1]]
	})
]