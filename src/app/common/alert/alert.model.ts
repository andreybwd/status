export class Alert {
	message : string;
	type : string = "danger";

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
