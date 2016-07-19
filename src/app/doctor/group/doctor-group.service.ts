import { Injectable } from '@angular/core';

import { DoctorGroup } from './doctor-group.model'

@Injectable()
export class DoctorGroupService {

  	constructor() {}

  	getList(): Promise<DoctorGroup[]> {
	  	return Promise.resolve(DoctorGroupData);
	}

	save(doctorGroup: DoctorGroup): Promise<DoctorGroup> {
		if (doctorGroup.id) {
			return this.update(doctorGroup);
		}
		return this.add(doctorGroup);
	}

	update(doctorGroup: DoctorGroup): Promise<DoctorGroup> {
		return Promise.resolve(doctorGroup);
	}

	add(doctorGroup: DoctorGroup): Promise<DoctorGroup> {
		doctorGroup.id = DoctorGroupData.length + 1;
		DoctorGroupData.push(doctorGroup);
		return Promise.resolve(doctorGroup);
	}

	remove(index: number): Promise<number> {
		DoctorGroupData.splice(index, 1);
		return Promise.resolve(index);
	}
}

export const DoctorGroupData : DoctorGroup[] = [
	new DoctorGroup({id : 1, name : "Врачи"}),
	new DoctorGroup({id : 2, name : "Администраторы"})
]
