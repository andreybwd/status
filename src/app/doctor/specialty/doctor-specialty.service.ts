import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { AbstractService } from '../../common/abstract.service';

import { DoctorSpecialty } from "./doctor-specialty.model";

import { SpecialtiesData } from '../../+specialty/specialty.service';

@Injectable()
export class DoctorSpecialtyService  extends AbstractService {
	af_data: FirebaseListObservable<DoctorSpecialty[]>;
	table : string = "doctors-specialties";

	constructor(public af: AngularFire) {
		super();
		this.af_data = this.af.database.list('/' + this.table);
	}

	_getList() : Observable<DoctorSpecialty[]> {
		let observable = super._getList();

		return observable.map(items => {
			items.map(item => {
				item.$Specialty = this.af.database.object(`/specialties/${item.specialty_key}`);
			});
			return items;
		});
	}
}

export const DoctorSpecialtyData : DoctorSpecialty[] = [
	new DoctorSpecialty({
		id : 1,
		Specialty : SpecialtiesData[4],
		category : 1,
		is_main : true
	}),
	new DoctorSpecialty({
		id : 2,
		Specialty : SpecialtiesData[0],
		category : 1,
		is_main : true
	})
]