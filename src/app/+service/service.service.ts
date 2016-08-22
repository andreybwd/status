import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { AbstractService } from '../common/abstract.service';

import { Service } from './service.model';

import { ServiceType }  from "./type/type.model";
import { ServicesTypesData }  from "./type/type.service";

@Injectable()
export class ServiceService extends AbstractService {
	af_data: FirebaseListObservable<Service[]>;
	table : string = "services";

	constructor(public af: AngularFire) {
		super();
		this.af_data = this.af.database.list('/' + this.table);
	}

	getList() : Promise<Service[]> {
		let promise = super.getList();

		this.getType(promise);

		return promise;
	}

	_getList() : Observable<Service[]> {
		let observable = super._getList();

		return observable.map(items => {
			items.map(item => {
				item.$Type = this.af.database.object(`/services-types/${item.type_key}`);
				return item;
			});
			return items;
		});
	}

	getType(promise : Promise<any>) : void {
		promise.then((items) => {
			items.map(item => {
				item.$Type = {};
				let type$ = this.af.database.object(`/services-types/${item.type_key}`);
				type$.subscribe(itm => item.$Type = itm);
			});

			return items;
		})
	}

	getByKeys = function (promise : Promise<any>) : void {
		promise.then((...items) => {
			items[0].map(item => {
				item.$Services = [];
				item.service_keys.map(key => {
					let service$ = this.af.database.object(`/services/${key}`);
					service$.subscribe(itm => item.$Services.push(itm));
				});
			});

			return items;
		})
	}
}

export const ServicesData: Service[] = [
	new Service({ 
		id : 1, 
		name : "Травматалог первичный прием", 
		Type : ServicesTypesData[0], 
		duration : 15,
		short_name : "Травм.перв.прий",
		price : 100
	}),
	new Service({ 
		id : 2, 
		name : "Травматалог вторичный прием", 
		Type : ServicesTypesData[1], 
		duration : 20,
		short_name : "Травм.втор.прий",
		price : 120
	}),
	new Service({ 
		id : 3, 
		name : "Ортопед первичный прием", 
		Type : ServicesTypesData[0], 
		duration : 30,
		short_name : "Орт.перв.прий",
		price : 150
	}),
	new Service({ 
		id : 4, 
		name : "Ортопед вторичный прием", 
		Type : ServicesTypesData[1], 
		duration : 40,
		short_name : "Орт.втор.прий",
		price : 170
	}),
	new Service({ 
		id : 5, 
		name : "Гастролог первичный прием", 
		Type : ServicesTypesData[0], 
		duration : 30,
		short_name : "Гаст.перв.прий",
		price : 160
	}),
	new Service({ 
		id : 6, 
		name : "Гастролог вторичный прием", 
		Type : ServicesTypesData[1], 
		duration : 20,
		short_name : "Гаст.втор.прий",
		price : 140
	}),
	new Service({ 
		id : 7, 
		name : "Хирург первичный прием", 
		Type : ServicesTypesData[0], 
		duration : 15,
		short_name : "Хир.перв.прий",
		price : 90
	}),
	new Service({ 
		id : 8, 
		name : "Хирург вторичный прием", 
		Type : ServicesTypesData[1], 
		duration : 20,
		short_name : "Хир.втор.прий",
		price : 100
	}),
	new Service({ 
		id : 9, 
		name : "Перевязка", 
		Type : ServicesTypesData[2], 
		duration : 30,
		short_name : "Перев.",
		price : 110
	}),
	new Service({ 
		id : 10, 
		name : "Наложение гипса", 
		Type : ServicesTypesData[2], 
		duration : 40,
		short_name : "Налож. гипса",
		price : 125
	}),
	new Service({ 
		id : 11, 
		name : "Укол", 
		Type : ServicesTypesData[2], 
		duration : 10,
		short_name : "Укол",
		price : 70
	}),
	new Service({ 
		id : 12, 
		name : "Вправление сустава", 
		Type : ServicesTypesData[2], 
		duration : 20,
		short_name : "Вправ. суст.",
		price : 100
	}),
	new Service({ 
		id : 13, 
		name : "Окулист первичный прием", 
		Type : ServicesTypesData[0], 
		duration : 30,
		short_name : "Окул.перв.прий",
		price : 120
	}),
	new Service({ 
		id : 14, 
		name : "Окулист вторичный прием", 
		Type : ServicesTypesData[1], 
		duration : 40,
		short_name : "Окул.втор.прий",
		price : 170
	})
];
