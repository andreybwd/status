import { Injectable } from '@angular/core';

import {DoctorSpecialty} from "./doctor-specialty.model";

@Injectable()
export class DoctorSpecialtyService {

  	constructor() {}

  	getList(): Promise<DoctorSpecialty[]> {
	  	return Promise.resolve(DoctorSpecialtyData);
	}

	save(doctorSpecialty: DoctorSpecialty): Promise<DoctorSpecialty> {
		if (doctorSpecialty.id) {
			return this.update(doctorSpecialty);
		}
		return this.add(doctorSpecialty);
	}

	update(doctorSpecialty: DoctorSpecialty): Promise<DoctorSpecialty> {
		return Promise.resolve(doctorSpecialty);
	}

	add(doctorSpecialty: DoctorSpecialty): Promise<DoctorSpecialty> {
		doctorSpecialty.id = DoctorSpecialtyData.length + 1;
		DoctorSpecialtyData.push(doctorSpecialty);
		return Promise.resolve(doctorSpecialty);
	}

	remove(index: number): Promise<number> {
		DoctorSpecialtyData.splice(index, 1);
		return Promise.resolve(index);
	}
}

export const DoctorSpecialtyData : DoctorSpecialty[] = [

]