import { Client } from '../client/client.model';
import { Doctor } from '../doctor/doctor.model';
import { Service } from '../+service/service.model';
import { Workplace } from '../workplace/workplace.model';
import { Discount } from '../discount/discount.model';

export class Order {
	id : number;
	Client : Client = new Client;
	PerformDoctor : Doctor = new Doctor;
	AssignDoctor : Doctor = new Doctor;
	Service : Service = new Service;
	Workplace : Workplace = new Workplace;
	amount : number;
	duration : number;
	date : Date;
	time : Date = new Date;
	Discount : Discount = new Discount;
	comments : string;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}	
}
