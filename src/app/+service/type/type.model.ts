export class ServiceType {
	id: number;
	name: string = "";
	type: string = "";

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
