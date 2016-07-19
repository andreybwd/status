import {Service} from "../+service/service.model";


export class Manipulation {
	constructor(
		public service: Service = new Service(),
		public manipulations: Service[] = []
	){}
}
