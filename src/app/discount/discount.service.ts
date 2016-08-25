import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { AbstractService } from '../common/abstract.service';

import { Discount } from "./discount.model"

@Injectable()
export class DiscountService extends AbstractService {
	af_data: FirebaseListObservable<Discount[]>;
	table : string = "discounts";

	constructor(public af: AngularFire) {
		super();
		this.af_data = this.af.database.list('/' + this.table);
	}

	_getList() : Observable<Discount[]> {
		let observable = super._getList();

		return observable.map((items) => {
		    items.map( item => {
				item.$Services = [];
				item.services_keys = item.services_keys || [];
	        	item.services_keys.map(key => {
		        	item.$Services.push(this.af.database.object(`/services/${key}`));
	        	});
		        return item;
		    });
		    return items;
		});
	}
}

const DiscountData : Discount[] = [
	new Discount({
		id : 1,
		name : "Скидка 1",
		amount : 3
	}),
	new Discount({
		id : 2,
		name : "Скидка 2",
		amount : 5
	})
];
