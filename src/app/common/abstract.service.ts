import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { FirebaseListObservable } from 'angularfire2';

@Injectable()
export abstract class AbstractService {
	af_data: FirebaseListObservable<any>;
	table : string;

	getList(): Promise<any[]> {
	  	return new Promise((resolve, reject) => {
	  		this.af_data.subscribe(items => resolve(items));
	  	});
	}

	_getList() : Observable<any> {
		return this.af_data;
	}

	save(object: any) {
		let key = object.$key;
		let _object = Object.assign({}, object);
		for (let key in _object) {
			if (key[0] === "$") { // || key[key.length - 1] === "$"
				delete _object[key];
			}
			if (Object.prototype.toString.call(_object[key]) === '[object Date]') {
				_object[key] = _object[key].toString();
			}
		}
		if (key) {
		  	return this.update(_object, key);
		}
		return this.add(_object);
	}

	add(object: any) {
		return this.af_data.push(object);
	}

	update(object: any, key: string) {
		return this.af_data.update(key, object);
	}

	remove(key: string) {
		return this.af_data.remove(key);
	}
}
