import { InsuranceDetail } from '../insurance/detail/insurance-detail.model';

export class Client {
	id : number;
	name : string = "";
	phone : string = "";
	town : string = "";
	sex : string = "";
	birth_date : Date;
	InsuranceDetail : InsuranceDetail = new InsuranceDetail;
	is_insurance : boolean = false;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
