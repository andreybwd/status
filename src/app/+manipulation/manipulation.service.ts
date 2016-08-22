import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { AbstractService } from '../common/abstract.service';

import { Manipulation } from './manipulation.model';

import { ServicesData } from '../+service/service.service';

@Injectable()
export class ManipulationService extends AbstractService {
	af_data: FirebaseListObservable<Manipulation[]>;
	table : string = "manipulations";

	constructor(public af: AngularFire) {
		super();
		this.af_data = this.af.database.list('/' + this.table);
	}

	_getList() : Observable<Manipulation[]> {
		let observable = super._getList();

		return observable.map((items) => {
		    items.map( item => {
		        item.$Service = this.af.database.object(`/services/${item.service_key}`);
				item.$Manipulations = [];
	        	item.manipulation_keys.map(manipulation_key => {
		        	item.$Manipulations.push(this.af.database.object(`/services/${manipulation_key}`));
	        	});
		        return item;
		    });
		    return items;
		});
	}
}

const ManipulationData: Manipulation[] = [
	new Manipulation({
		id : 1,
		Service : ServicesData[6],
		Manipulations : [ServicesData[8], ServicesData[9], ServicesData[11]]
	})
];
