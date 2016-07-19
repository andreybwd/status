import { Component, OnInit } from '@angular/core';

import {TAB_DIRECTIVES} from 'ng2-bootstrap';

import {AlertService, AlertModel} from '../common/alert/alert.service';

import {DoctorGroup} from './group/doctor-group.model';
import {DoctorGroupService} from './group/doctor-group.service';

import {Doctor} from './doctor.model';
import {DoctorService} from './doctor.service';

import {DoctorSpecialty} from './specialty/doctor-specialty.model';
import {DoctorSpecialtyService} from './specialty/doctor-specialty.service';

import {Specialty} from '../+specialty/specialty.model';
import {SpecialtyService} from '../+specialty/specialty.service';

import {Service} from '../+service/service.model';
import {ServiceService} from '../+service/service.service';

import {DoctorServiceModel} from "./service/doctor-service.model";
import {DoctorServiceService} from './service/doctor-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-doctor',
  templateUrl: 'doctor.component.html',
  styleUrls: ['doctor.component.css'],
  directives: [TAB_DIRECTIVES]
})
export class DoctorComponent implements OnInit {
	doctorGroupModel : DoctorGroup = new DoctorGroup;
	doctorGroups : DoctorGroup[] = [];

	doctorModel : Doctor = new Doctor;
	doctors : Doctor[] = [];

	mainDoctorSpecialtyModel : DoctorSpecialty = new DoctorSpecialty({is_main : true});
	doctorSpecialtyModel : DoctorSpecialty = new DoctorSpecialty();
	specialties : Specialty[] = [];

	doctorServiceModel : DoctorServiceModel = new DoctorServiceModel();
	services : Service[] = [];
  	
  	constructor(
		public doctorGroupService : DoctorGroupService = new DoctorGroupService,
		public doctorService : DoctorService = new DoctorService,
		public specialtyService : SpecialtyService = new SpecialtyService,
		public alertService : AlertService = new AlertService,
		public serviceService : ServiceService = new ServiceService
	) {}

  	ngOnInit() {
  		this.doctorGroupService.getList().then(doctorGroups => this.doctorGroups = doctorGroups);
  		this.doctorService.getList().then(doctors => this.doctors = doctors);
  		this.specialtyService.getList().then(specialties => this.specialties = specialties);	
  		this.serviceService.getList().then(services => this.services = services);	
  	}

  	saveGroup() {
  		this.doctorGroupService.save(this.doctorGroupModel);

  		this.doctorGroupModel = new DoctorGroup;
  	}

  	save() {
  		this.doctorService.save(this.doctorModel, this.mainDoctorSpecialtyModel);

  		this.doctorModel = new Doctor;
  		this.mainDoctorSpecialtyModel = new DoctorSpecialty({is_main : true});
  	}

  	saveSpecialty() {
  		if (!this.isDoctor()) {
  			return false;
  		}
		this.doctorService.save(this.doctorModel, this.doctorSpecialtyModel);

		this.doctorSpecialtyModel = new DoctorSpecialty();
  	}

  	saveService() {
  		if (!this.isDoctor()) {
  			return false;
  		}

		this.doctorService.saveService(this.doctorModel, this.doctorServiceModel);

		this.doctorServiceModel = new DoctorServiceModel();
  	}

	edit(index : number) {
		this.doctorModel = this.doctors[index];
		let main_specialty : DoctorSpecialty = this.doctorModel.DoctorSpecialty.filter(value => value.is_main = true).pop();
		this.mainDoctorSpecialtyModel = new DoctorSpecialty(main_specialty);
	}

	isDoctor() : boolean {
  		if (this.doctorModel.id) {
  			return true;
  		}

  		this.alertService.add(new AlertModel({message : "Выберите доктора"}));
  		return false;
	}
}
