import { Injectable, Inject } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { AbstractService } from '../common/abstract.service';

import { Workplace } from './workplace.model';
import { ServicesData } from '../+service/service.service';

import { ServiceService } from '../+service/service.service';

@Injectable()
export class WorkplaceService extends AbstractService {
	af_data: FirebaseListObservable<Workplace[]>;
	table : string = "workplaces";
	service : ServiceService;

	constructor(public af: AngularFire, public serviceService: ServiceService) {
		super();
		this.af_data = this.af.database.list('/' + this.table);
		this.service = this.serviceService;
	}

	_getList() : Observable<Workplace[]> {
		let observable = super._getList();

		return observable.map(items => {
			items.map(item => {
				item.$Services = [];
				item.service_keys.map(key => {
					item.$Services.push(this.af.database.object(`/services/${key}`));
				})
				return item;
			});
			return items;
		});
	}
}

export const WorkplaceData: Workplace[] = [
	new Workplace({
		id : 1, 
		name : "Травматология",
		Services : [ServicesData[0], ServicesData[1]],
		house : "Келецкая 30",
		floor : 1,
		room : 3
	}),
	new Workplace({
		id : 2, 
		name : "Ортопед",
		Services : [ServicesData[2], ServicesData[3]],
		house : "Келецкая 30",
		floor : 1,
		room : 5
	}),
	new Workplace({
		id : 3, 
		name : "Хирургия",
		Services : [ServicesData[6], ServicesData[7]],
		house : "Келецкая 30",
		floor : 1,
		room : 4
	}),
	new Workplace({
		id : 4, 
		name : "Манпуляционная",
		Services : [
			ServicesData[8], 
			ServicesData[9], 
			ServicesData[10], 
			ServicesData[11]
		],
		house : "Келецкая 30",
		floor : 1,
		room : 2
	}),
	new Workplace({
		id : 5, 
		name : "Окулист",
		Services : [ServicesData[12], ServicesData[13]],
		house : "Келецкая 30",
		floor : 1,
		room : 6
	}),
	new Workplace({
		id : 6, 
		name : "Гастролог",
		Services : [ServicesData[4], ServicesData[5]],
		house : "Келецкая 30",
		floor : 1,
		room : 7
	}),
];
