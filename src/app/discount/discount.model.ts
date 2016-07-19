import {Service} from "../+service/service.model";


export class Discount {
	constructor(
		public id : number = 0,
		public name : string = "",
		public Services : Service[] = [],
		public amount : number = null,
		public date : Date = new Date()
	) {}
}
