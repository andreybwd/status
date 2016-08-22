import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { AbstractService } from '../../common/abstract.service';

import { DoctorServiceModel } from './doctor-service.model';

import { ServicesData } from '../../+service/service.service';

@Injectable()
export class DoctorServiceService extends AbstractService {
	af_data: FirebaseListObservable<DoctorServiceModel[]>;
	table : string = "doctors-services";

	constructor(public af: AngularFire) {
		super();
		this.af_data = this.af.database.list('/' + this.table);
	}

	_getList() : Observable<DoctorServiceModel[]> {
		let observable = super._getList();

		return observable.map(items => {
			items.map(item => {
				item.$Service = this.af.database.object(`/services/${item.service_key}`);
			});
			return items;
		});
	}
}

export const DoctorServiceData : DoctorServiceModel[] = [
	new DoctorServiceModel({id : 1, Service : ServicesData[0]}),
	new DoctorServiceModel({id : 2, Service : ServicesData[1]}),
	new DoctorServiceModel({id : 3, Service : ServicesData[2]}),
	new DoctorServiceModel({id : 4, Service : ServicesData[3]}),
	new DoctorServiceModel({id : 5, Service : ServicesData[4]}),
	new DoctorServiceModel({id : 6, Service : ServicesData[5]}),
	new DoctorServiceModel({id : 7, Service : ServicesData[6]}),
	new DoctorServiceModel({id : 8, Service : ServicesData[7]}),
	new DoctorServiceModel({id : 9, Service : ServicesData[8]}),
	new DoctorServiceModel({id : 10, Service : ServicesData[9]}),
	new DoctorServiceModel({id : 11, Service : ServicesData[10]}),
	new DoctorServiceModel({id : 12, Service : ServicesData[11]}),
	new DoctorServiceModel({id : 13, Service : ServicesData[12]}),
	new DoctorServiceModel({id : 14, Service : ServicesData[13]})
]
