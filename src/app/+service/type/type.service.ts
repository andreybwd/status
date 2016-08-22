import { Injectable } from '@angular/core';

import { ServiceType }  from "./type.model";

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AbstractService } from '../../common/abstract.service';

@Injectable()
export class ServiceTypeService extends AbstractService {
	af_data: FirebaseListObservable<ServiceType[]>;
	table : string = "services-types";

	constructor(public af: AngularFire) {
		super();
		this.af_data = this.af.database.list('/' + this.table);
	}
}

export const ServicesTypesData: ServiceType[] = [
	new ServiceType({id : 1, name : "Первичная"}),
	new ServiceType({id : 2, name : "Вторичная"}),
	new ServiceType({id : 3, name : "Манипуляция", type : "manipulation"}),
	new ServiceType({id : 4, name : "Рентген"}),
	new ServiceType({id : 5, name : "УЗД"}),
	new ServiceType({id : 6, name : "Лаборатория"})
];