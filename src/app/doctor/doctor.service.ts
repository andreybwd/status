import { Injectable } from '@angular/core';

import { Doctor } from './doctor.model';
import { DoctorSpecialty } from './specialty/doctor-specialty.model';
import { DoctorServiceModel } from './service/doctor-service.model'

import { DoctorGroupData } from './group/doctor-group.service';
import { DoctorSpecialtyData } from './specialty/doctor-specialty.service';

@Injectable()
export class DoctorService {

  	constructor() {}

  	getList(): Promise<Doctor[]> {
	  	return Promise.resolve(DoctorData);
	}

	save(doctor: Doctor, doctorSpecialty: DoctorSpecialty): Promise<Doctor> {
		if (doctor.id) {
			return this.update(doctor, doctorSpecialty);
		}
		return this.add(doctor, doctorSpecialty);
	}

	update(doctor: Doctor, doctorSpecialty: DoctorSpecialty): Promise<Doctor> {
		let index_specialty = doctor.Specialty.findIndex(value => value.id === doctorSpecialty.id)
		if (index_specialty === -1) {
			doctorSpecialty.id = doctor.Specialty.length + 1;
			doctor.Specialty.push(doctorSpecialty);
		}
		else {
			doctor.Specialty[index_specialty] = doctorSpecialty;
		}
		return Promise.resolve(doctor);
	}

	add(doctor: Doctor, doctorSpecialty: DoctorSpecialty): Promise<Doctor> {
		doctorSpecialty.id = doctor.Specialty.length + 1;
		doctor.Specialty.push(doctorSpecialty);

		doctor.id = DoctorData.length + 1;
		DoctorData.push(doctor);
		return Promise.resolve(doctor);
	}

	remove(index: number): Promise<number> {
		DoctorData.splice(index, 1);
		return Promise.resolve(index);
	}

	saveService(doctor: Doctor, doctorService: DoctorServiceModel): Promise<Doctor> {
		let index_specialty = doctor.Service.findIndex(value => value.id === doctorService.id)
		if (index_specialty === -1) {
			doctorService.id = doctor.Service.length + 1;
			doctor.Service.push(doctorService);
		}
		else {
			doctor.Service[index_specialty] = doctorService;
		}
		return Promise.resolve(doctor);
	}
}

export const DoctorData : Doctor[] = [
	new Doctor({
		id : 1, 
		first_name : "Хаус", 
		last_name : "Доктор", 
		Group : DoctorGroupData[0], 
		Specialty : [DoctorSpecialtyData[0]]
	}),
	new Doctor({
		id : 2, 
		first_name : "Кто", 
		last_name : "Доктор", 
		Group : DoctorGroupData[0], 
		Specialty : [DoctorSpecialtyData[0]]
	})
]