import { Component, OnInit } from '@angular/core';

import { Specialty } from './specialty.model';
import { SpecialtyService } from './specialty.service';

@Component({
  moduleId: module.id,
  selector: 'app-specialty',
  templateUrl: 'specialty.component.html',
  styleUrls: ['specialty.component.css']
})
export class SpecialtyComponent implements OnInit {
	specialties: Specialty[];
	specialtyModel: Specialty = new Specialty;

  	constructor(
  		public specialtyService: SpecialtyService
	) {}

  	ngOnInit() {
		this.specialtyService._getList().subscribe(specialties => this.specialties = specialties);
  	}

	save() {
		this.specialtyService.save(this.specialtyModel);
		this.specialtyModel = new Specialty;
	}

	edit(specialty : Specialty) {
		this.specialtyModel = specialty;
	}

	remove(key : string) {
		if (confirm("Удалить?")) {
			this.specialtyService.remove(key);
		}
	}
}