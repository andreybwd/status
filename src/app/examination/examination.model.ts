import { Workplace } from '../workplace/workplace.model';
import { ExaminationTime } from './time/examination-time.model';
import { ExaminationList } from './examination-list/examination-list.model';

export class Examination {
	id: number;
	name : string;
	conditions : string;
	Workplace : Workplace = new Workplace;
	notes : string;
	Time : ExaminationTime = new ExaminationTime;
	List : ExaminationList = new ExaminationList;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
