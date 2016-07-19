import { Component, OnInit } from '@angular/core';

import { WorkplaceService } from './workplace.service';
import { Workplace } from './workplace.model';

import { ServiceService } from '../+service/service.service';
import { Service } from '../+service/service.model';

@Component({
  moduleId: module.id,
  selector: 'app-workplace',
  templateUrl: 'workplace.component.html',
  styleUrls: ['workplace.component.css']
})
export class WorkplaceComponent implements OnInit {
	workplaceModel: Workplace = new Workplace;

	workplaces: Workplace[] = [];

	services: Service[] = [];

  	constructor(
  		public serviceService : ServiceService,
  		public workplaceService : WorkplaceService
	) {}

  	ngOnInit() {
		this.serviceService.getList().then(services => this.services = services);

		this.workplaceService.getList().then(workplaces => this.workplaces = workplaces);
  	}

	save() {
		this.workplaceService.save(this.workplaceModel);

		this.workplaceModel = new Workplace;
	}

	edit(index : number) {
		this.workplaceModel = this.workplaces[index];
	}

	remove(index : number) {
		if (confirm("Удалить?")) {
			this.workplaceService.remove(index);
		}
	}
}
