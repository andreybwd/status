import { ServiceType }  from "./type/type.model";

export class Service {
	constructor(
		public id : number = 0,
		public name : string = "",
		public Type : ServiceType = new ServiceType(),
		public duration : number = null,
		public short_name : string = "",
		public code : string = "",
		public price : number = null,
		public payment_appoint : number = null,
		public payment_perform : number = null,
		public payment_check : number = null,
		public description : string = ""
	){}
}
