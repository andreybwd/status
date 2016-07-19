import { Injectable } from '@angular/core';
import { Specialty } from './specialty.model';

@Injectable()
export class SpecialtyService {

	constructor() {}

	getList(): Promise<Specialty[]> {
	  	return Promise.resolve(SpecialtiesData);
	}

	addSpeciality(specialty: Specialty): Promise<Specialty> {
		specialty.id = SpecialtiesData.length + 1;
		SpecialtiesData.push(specialty);
		return Promise.resolve(specialty);
	}
}

export const SpecialtiesData: Specialty[] = [
	new Specialty({id : 1, name : "Лор"}),
	new Specialty({id : 2, name: "Хирург"}),
	new Specialty({id : 3, name: "Терапевт"})
];