import { Component, OnInit } from '@angular/core';

import { ManipulationService } from './manipulation.service';
import { Manipulation } from './manipulation.model';

import { ServiceService } from '../+service/service.service';
import { Service } from '../+service/service.model';

@Component({
  moduleId: module.id,
  selector: 'app-manipulation',
  templateUrl: 'manipulation.component.html',
  styleUrls: ['manipulation.component.css']
})
export class ManipulationComponent implements OnInit {
	manipulations: Manipulation[] = [];
	manipulationModel : Manipulation = new Manipulation;

	services: Service[] = [];

  	constructor(
  		public serviceService : ServiceService,
  		public manipulationService : ManipulationService
	) {}

	ngOnInit() {
		this.serviceService.getList().then(services => this.services = services);

		this.manipulationService.getList().then(manipulations => this.manipulations = manipulations);
	}

	save() {
		this.manipulationService.save(this.manipulationModel);

		this.manipulationModel = new Manipulation;
	}


	edit(index : number) {
		this.manipulationModel 	= this.manipulations[index];
	}

	remove(index : number) {
		if (confirm("Удалить?")) {
			this.manipulationService.remove(index);
		}
	}
}
