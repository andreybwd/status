import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Service } from './service.model';
import { ServiceService } from './service.service';

import { ServiceType } from './type/type.model';
import { ServiceTypeService } from './type/type.service';

@Component({
  moduleId: module.id,
  selector: 'app-service',
  templateUrl: 'service.component.html',
  styleUrls: ['service.component.css']
})
export class ServiceComponent implements OnInit {
	services: Service[];
	serviceModel: Service = new Service;

	servicesTypes: ServiceType[];
	serviceTypeModel: ServiceType = new ServiceType;

  	constructor(
  		public serviceService: ServiceService,
  		public serviceTypeService: ServiceTypeService
	) {}

  	ngOnInit() {
		this.serviceService._getList().subscribe(services => this.services = services);
		this.serviceTypeService._getList().subscribe(servicesTypes => this.servicesTypes = servicesTypes);
  	}

	save() {
		this.serviceService.save(this.serviceModel);
		this.serviceModel = new Service;
	}

	edit(service : Service) {
		this.serviceModel = service;
	}

	remove(key : string) {
		if (confirm("Удалить?")) {
			this.serviceService.remove(key);
		}
	}

	addType() {
		this.serviceTypeService.save(this.serviceTypeModel);
		this.serviceTypeModel = new ServiceType;
	}
}
