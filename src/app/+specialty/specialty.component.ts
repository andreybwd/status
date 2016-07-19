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
	specialties: Specialty[] = [];
	specialtyModel: Specialty = new Specialty;

  	constructor(
  		public specialtyService: SpecialtyService
	) {}

  	ngOnInit() {
		this.specialtyService.getList().then(specialties => this.specialties = specialties);
  	}

	addSpeciality() {
		this.specialtyService.addSpeciality(this.specialtyModel);
		this.specialtyModel = new Specialty;
	}
}