import { Injectable } from '@angular/core';
import { Manipulation } from './manipulation.model';
import { ServicesData } from '../+service/service.service';

@Injectable()
export class ManipulationService {

  	constructor() {}

	getList(): Promise<Manipulation[]> {
	  	return Promise.resolve(ManipulationData);
	}

	save(manipulation: Manipulation): Promise<Manipulation> {
		if (manipulation.id) {
			return this.update(manipulation);
		}
		return this.add(manipulation);
	}

	update(manipulation: Manipulation): Promise<Manipulation> {
		return Promise.resolve(manipulation);
	}

	add(manipulation: Manipulation): Promise<Manipulation> {
		manipulation.id = ManipulationData.length + 1;
		ManipulationData.push(manipulation);
		return Promise.resolve(manipulation);
	}

	remove(index: number): Promise<number> {
		ManipulationData.splice(index, 1);
		return Promise.resolve(index);
	}
}

const ManipulationData: Manipulation[] = [
	new Manipulation({
		id : 1,
		Service : ServicesData[6],
		Manipulations : [ServicesData[8], ServicesData[9], ServicesData[11]]
	})
];
