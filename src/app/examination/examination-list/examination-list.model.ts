import { Examination } from '../examination.model';

export class ExaminationList {
	id : number;
	name : string = "";
	Examinations : Examination[] = [];

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
