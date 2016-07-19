import { Injectable } from '@angular/core';

import { Examination } from './examination.model';
import { ExaminationList } from './examination-list/examination-list.model';
import { ExaminationListData } from './examination-list/examination-list.service';

@Injectable()
export class ExaminationService {

  	constructor() {}

 //  	getList(): Promise<Examination[]> {
	//   	return Promise.resolve(ExaminationData);
	// }

	save(examinationList: ExaminationList, examination: Examination): Promise<Examination> {
		if (examination.id) {
			return this.update(examination);
		}
		return this.add(examinationList, examination);
	}

	update(examination: Examination): Promise<Examination> {
		return Promise.resolve(examination);
	}

	add(examinationList: ExaminationList, examination: Examination): Promise<Examination> {
		examination.id = examinationList.Examinations.length + 1;
		//ExaminationData.push(examination);
		examinationList.Examinations.push(examination);
		return Promise.resolve(examination);
	}

	remove(examinationList: ExaminationList, index: number): Promise<number> {
		//ExaminationData.splice(index, 1);
		examinationList.Examinations.splice(index, 1);
		return Promise.resolve(index);
	}
}

// const ExaminationData : Examination[] = [
	
// ]
