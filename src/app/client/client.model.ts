export class Client {
	id : number;
	name : string = "";
	phone : string = "";
	town : string = "";
	sex : string = "";
	birth_date : Date;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
