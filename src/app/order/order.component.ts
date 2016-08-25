import { Component, OnInit } from '@angular/core';

import {TimepickerComponent, DATEPICKER_DIRECTIVES, TYPEAHEAD_DIRECTIVES} from 'ng2-bootstrap';

import {AlertService, AlertModel} from '../common/alert/alert.service';

import { Order } from './order.model';
import { OrderService } from './order.service';

import { Client } from '../client/client.model';
import { ClientService } from '../client/client.service';

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

import { Insurance } from '../insurance/insurance.model';
import { InsuranceService } from '../insurance/insurance.service';

@Component({
  moduleId: module.id,
  selector: 'app-order',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css'],
  directives : [TimepickerComponent, DATEPICKER_DIRECTIVES, TYPEAHEAD_DIRECTIVES]
})
export class OrderComponent implements OnInit {
	orderModel : Order = new Order;

	clientModel : Client = new Client;
	clients : Client[] = [];

	doctors : Doctor[] = [];
	doctors_all : Doctor[] = [];

	servicesTypes: ServiceType[];
	services : Service[];
	services_all : Service[];

	workplaces : Workplace[] = [];
	workplaces_all : Workplace[] = [];

	discounts : Discount[] = [];

	insurances : Insurance[] = [];

  	constructor(
  		public doctorService : DoctorService,
		public serviceService : ServiceService,
		public workplaceService : WorkplaceService,
		public discountService : DiscountService,
  		public serviceTypeService: ServiceTypeService,
  		public orderService: OrderService,
  		public clientService: ClientService,
		public alertService : AlertService,
		public insuranceService : InsuranceService
	) {}

  	ngOnInit() {
  		this.doctorService.getList().then(doctors => {
  			this.doctors 		= doctors;
  			this.doctors_all 	= doctors;
  		});
        this.serviceService.getList().then(services => {
            this.services     = services;
  		    this.services_all = services;
        });
  		this.workplaceService.getList().then(workplaces => {
  			this.workplaces 	= workplaces;
  			this.workplaces_all = workplaces;
  		});
  		this.discountService.getList().then(discounts => this.discounts = discounts);
		this.serviceTypeService.getList().then(servicesTypes => this.servicesTypes = servicesTypes);
		this.clientService.getList().then(clients => this.clients = clients);
		this.insuranceService.getList().then(insurances => this.insurances = insurances);
  	}

  	selectService(service : Service) {
  		this.orderModel.Service = service;
  		this.orderModel.price  	= service.price;

  		this.doctors = this.doctors_all.filter(value => {
  			if (value.$DoctorService.filter(ds_value => ds_value.$Service === service).length) {
  				return true;
  			}
		});
		if (this.doctors.length === 1) {
			this.orderModel.PerformDoctor = this.doctors[0];
		}

  		this.workplaces = this.workplaces_all.filter(value => value.$Services.indexOf(service) !== -1);
  		if (this.workplaces.length === 1) {
			this.orderModel.Workplace = this.workplaces[0];
		}

		if (this.orderModel.PerformDoctor.id) {
			this.orderModel.PerformDoctor.$DoctorService.map(value => {
				if (value.$Service === service) {
					this.orderModel.duration = value.$Service.duration;
				}
			});
		}
  	}

  	selectDoctor(doctor : Doctor) {
  		if (!this.orderModel.Service.id) {
			// this.services = this.services_all.filter(value => {
			// 	if (doctor.DoctorService.filter(ds_value => ds_value.Service === value).length) {
	  // 				return true;
	  // 			}
			// });
  		}
  		else {
			doctor.$DoctorService.map(value => {
				if (value.$Service === this.orderModel.Service) {
					this.orderModel.duration = value.$Service.duration;
				}
			});
  		}
  	}

  	selectClient(event : any) {
  		this.clientModel = event.item;
  	}

  	save() {
  		this.clientService.save(this.clientModel).then(client => {
  			this.orderModel.Client = client;
  			this.orderService.save(this.orderModel);

  			this.orderModel 	= new Order;
  			this.clientModel 	= new Client;

  			this.alertService.add(new AlertModel({message : "Клиент успешно записан", type : "success"}));
  		});
  	}

}
