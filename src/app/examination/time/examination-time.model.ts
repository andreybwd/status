export class ExaminationTime {
	id : number;
	name : string = "";
	from : number;
	to : number;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}

export const ExaminationTimeData : ExaminationTime[] = [
	new ExaminationTime({id : 1, name : "дни"}),
	new ExaminationTime({id : 2, name : "часы"}),
	new ExaminationTime({id : 3, name : "минуты"})
]