export class ServiceType {
	id: number;
	$key: string = "";
	name: string = "";
	type: string = "";

	constructor(values: Object = {}) {
//console.log(values);
    	Object.assign(this, values);
  	}
}
