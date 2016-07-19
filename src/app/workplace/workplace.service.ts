import { Injectable } from '@angular/core';

import { Workplace } from './workplace.model';

@Injectable()
export class WorkplaceService {

  	constructor() {}

	getList(): Promise<Workplace[]> {
	  	return Promise.resolve(WorkplaceData);
	}

	save(workplace: Workplace): Promise<Workplace> {
		if (workplace.id) {
			return this.update(workplace);
		}
		return this.add(workplace);
	}

	update(workplace: Workplace): Promise<Workplace> {
		return Promise.resolve(workplace);
	}

	add(workplace: Workplace): Promise<Workplace> {
		workplace.id = WorkplaceData.length + 1;
		WorkplaceData.push(workplace);
		return Promise.resolve(workplace);
	}

	remove(index: number): Promise<number> {
		WorkplaceData.splice(index, 1);
		return Promise.resolve(index);
	}
}

const WorkplaceData: Workplace[] = [
	new Workplace({id : 1, name : "Кабинет 1"}),
	new Workplace({id : 2, name : "Кабинет 2"}),
	new Workplace({id : 3, name : "Кабинет 3"})
];
