import { Injectable } from '@angular/core';

import { Workplace } from './workplace.model';
import { ServicesData } from '../+service/service.service';

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
