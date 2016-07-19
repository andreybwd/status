import { Component, OnInit } from '@angular/core';
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
	services: Service[] = [];
	serviceModel: Service = new Service;

	servicesTypes: ServiceType[] = [];
	serviceTypeModel: ServiceType = new ServiceType;

  	constructor(
  		public serviceService: ServiceService,
  		public serviceTypeService: ServiceTypeService
	) {}

  	ngOnInit() {
		this.serviceService.getList().then(services => this.services = services);

		this.serviceTypeService.getList().then(servicesTypes => this.servicesTypes = servicesTypes);
  	}

	save() {
		this.serviceService.save(this.serviceModel);
		this.serviceModel = new Service;
	}

	addType() {
		this.serviceTypeService.add(this.serviceTypeModel);
		this.serviceTypeModel = new ServiceType;
	}

	edit(index) {
		this.serviceModel = this.services[index];
	}

	remove(index) {
		if (confirm("Удалить?")) {
			this.serviceService.remove(index);
		}
	}
}
