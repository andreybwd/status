import { Injectable } from '@angular/core';

import { ExaminationList } from './examination-list.model';

@Injectable()
export class ExaminationListService {

  	constructor() {}

  	getList(): Promise<ExaminationList[]> {
	  	return Promise.resolve(ExaminationListData);
	}

	save(examinationList: ExaminationList): Promise<ExaminationList> {
		if (examinationList.id) {
			return this.update(examinationList);
		}
		return this.add(examinationList);
	}

	update(examinationList: ExaminationList): Promise<ExaminationList> {
		return Promise.resolve(examinationList);
	}

	add(examinationList: ExaminationList): Promise<ExaminationList> {
		examinationList.id = ExaminationListData.length + 1;
		ExaminationListData.push(examinationList);
		return Promise.resolve(examinationList);
	}

	remove(index: number): Promise<number> {
		ExaminationListData.splice(index, 1);
		return Promise.resolve(index);
	}
}

export const ExaminationListData : ExaminationList[] = [
	new ExaminationList({id : 1, name : "Маршрут терапевта"}),
	new ExaminationList({id : 2, name : "Маршрут хирурга"})
]
