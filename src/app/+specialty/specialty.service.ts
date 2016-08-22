import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AbstractService } from '../common/abstract.service';

import { Specialty } from './specialty.model';

@Injectable()
export class SpecialtyService extends AbstractService {
	af_data: FirebaseListObservable<Specialty[]>;
	table : string = "specialties";

	constructor(public af: AngularFire) {
		super();
		this.af_data = this.af.database.list('/' + this.table);
	}
}

export const SpecialtiesData: Specialty[] = [
	new Specialty({id : 1, name : "Травматолог"}),
	new Specialty({id : 2, name : "Ортопед"}),
	new Specialty({id : 3, name : "Гастролог"}),
	new Specialty({id : 4, name : "Окулист"}),
	new Specialty({id : 5, name : "Хирург"})
];
