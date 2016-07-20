import { Insurance } from '../insurance.model';

export class InsuranceDetail {
	id : number;
	Insurance : Insurance = new Insurance;
	policy : string = "";
	doctor_name : string = "";
	percent : number;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
