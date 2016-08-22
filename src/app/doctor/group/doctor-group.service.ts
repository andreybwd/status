import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { AbstractService } from '../../common/abstract.service';

import { DoctorGroup } from './doctor-group.model'

@Injectable()
export class DoctorGroupService  extends AbstractService {
	af_data: FirebaseListObservable<DoctorGroup[]>;
	table : string = "doctor-groups";

	constructor(public af: AngularFire) {
		super();
		this.af_data = this.af.database.list('/' + this.table);
	}
}

export const DoctorGroupData : DoctorGroup[] = [
	new DoctorGroup({id : 1, name : "Врачи"}),
	new DoctorGroup({id : 2, name : "Администраторы"})
]
