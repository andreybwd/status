import { Injectable } from '@angular/core';
import { Manipulation } from './manipulation.model';

@Injectable()
export class ManipulationService {

  	constructor() {}

	getList(): Promise<Manipulation[]> {
	  	return Promise.resolve(ManipulationData);
	}

	save(manipulation: Manipulation, is_edit: boolean): Promise<Manipulation> {
		if (is_edit) {
			return this.update(manipulation);
		}
		return this.add(manipulation);
	}

	update(manipulation: Manipulation): Promise<Manipulation> {
		return Promise.resolve(manipulation);
	}

	add(manipulation: Manipulation): Promise<Manipulation> {
		ManipulationData.push(manipulation);
		return Promise.resolve(manipulation);
	}

	remove(index: number): Promise<number> {
		ManipulationData.splice(index, 1);
		return Promise.resolve(index);
	}
}

const ManipulationData: Manipulation[] = [
	
];
