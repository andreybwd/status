export class Specialty {
	id: number;
	$key: string = "";
	name: string = "";

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
