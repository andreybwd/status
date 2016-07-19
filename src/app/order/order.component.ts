import { Component, OnInit } from '@angular/core';

import {TimepickerComponent} from 'ng2-bootstrap';

import { Order } from './order.model';

import { Client } from '../client/client.model';

import { Doctor } from '../doctor/doctor.model';
import { DoctorService } from '../doctor/doctor.service';

import { Service } from '../+service/service.model';
import { ServiceService } from '../+service/service.service';

import { Workplace } from '../workplace/workplace.model';
import { WorkplaceService } from '../workplace/workplace.service';

import { Discount } from '../discount/discount.model';
import { DiscountService } from '../discount/discount.service';

import { ServiceType } from '../+service/type/type.model';
import { ServiceTypeService } from '../+service/type/type.service';

@Component({
  moduleId: module.id,
  selector: 'app-order',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css'],
  directives : [TimepickerComponent]
})
export class OrderComponent implements OnInit {
	orderModel : Order = new Order;

	clientModel : Client = new Client;

	doctors : Doctor[] = [];

	services : Service[] = [];

	workplaces : Workplace[] = [];

	discounts : Discount[] = [];

	servicesTypes: ServiceType[] = [];

  	constructor(
  		public doctorService : DoctorService = new DoctorService,
		public serviceService : ServiceService = new ServiceService,
		public workplaceService : WorkplaceService = new WorkplaceService,
		public discountService : DiscountService = new DiscountService,
  		public serviceTypeService: ServiceTypeService = new ServiceTypeService
	) {}

  	ngOnInit() {
  		this.doctorService.getList().then(doctors => this.doctors = doctors);
  		this.serviceService.getList().then(services => this.services = services);	
  		this.workplaceService.getList().then(workplaces => this.workplaces = workplaces);	
  		this.discountService.getList().then(discounts => this.discounts = discounts);
		this.serviceTypeService.getList().then(servicesTypes => this.servicesTypes = servicesTypes);
  	}

}
