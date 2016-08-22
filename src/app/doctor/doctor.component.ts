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
	specialties : Specialty[];
	doctorSpecialties : DoctorSpecialty[] = [];

	doctorServiceModel : DoctorServiceModel = new DoctorServiceModel();
	doctorServices : DoctorServiceModel[];
	services : Service[];
		
	constructor(
		public doctorGroupService : DoctorGroupService,
		public doctorService : DoctorService,
		public specialtyService : SpecialtyService,
		public alertService : AlertService,
		public serviceService : ServiceService,
		public doctorSpecialtyService : DoctorSpecialtyService,
		public doctorServiceService : DoctorServiceService
	) {}

	ngOnInit() {
		this.doctorGroupService._getList().subscribe(doctorGroups => this.doctorGroups = doctorGroups);
		this.doctorService._getList().subscribe(doctors => this.doctors = doctors);
		this.specialtyService._getList().subscribe(specialties => this.specialties = specialties);  
		this.doctorSpecialtyService._getList().subscribe(doctorSpecialties => this.doctorSpecialties = doctorSpecialties);  
		this.doctorServiceService._getList().subscribe(doctorServices => this.doctorServices = doctorServices);  
		this.serviceService._getList().subscribe(services => this.services = services);
	}

	saveGroup() {
		this.doctorGroupService.save(this.doctorGroupModel);

		this.doctorGroupModel = new DoctorGroup;
	}

	save() {
		this.saveDoctor(this.mainDoctorSpecialtyModel);

		this.doctorModel = new Doctor;
		this.mainDoctorSpecialtyModel = new DoctorSpecialty({is_main : true});
	}

	saveSpecialty() {
		if (!this.isDoctor()) {
			return false;
		}

		this.saveDoctor(this.doctorSpecialtyModel);

		this.setSpecialties();

		this.doctorSpecialtyModel = new DoctorSpecialty();
	}

	saveService() {
		if (!this.isDoctor()) {
			return false;
		}

		let main_specialty = this.doctorServiceService.save(this.doctorServiceModel);
		if (this.doctorModel.doctor_service_keys.indexOf(this.doctorServiceModel.$key) === -1) {
			this.doctorModel.doctor_service_keys.push(main_specialty.getKey());	
		}

		this.doctorService.save(this.doctorModel);

		this.setServices();

		this.doctorServiceModel = new DoctorServiceModel();
	}

	edit(doctor : Doctor) {
		this.doctorModel = doctor;

		this.setSpecialties();

		this.setServices();
	}

	private isDoctor() : boolean {
		if (this.doctorModel.$key) {
			return true;
		}

		this.alertService.add(new AlertModel({message : "Выберите доктора"}));
		return false;
	}

	private saveDoctor(doctorSpecialty : DoctorSpecialty) {
		let main_specialty = this.doctorSpecialtyService.save(doctorSpecialty);
		if (this.doctorModel.doctor_specialty_keys.indexOf(doctorSpecialty.$key) === -1) {
			this.doctorModel.doctor_specialty_keys.push(main_specialty.getKey());	
		}

		this.doctorService.save(this.doctorModel);
	}

	private setSpecialties() {
		this.doctorModel.doctor_specialty_keys = this.doctorModel.doctor_specialty_keys || [];
		this.doctorModel.$DoctorSpecialty = [];
		this.doctorSpecialties.map(ds => {
			if (this.doctorModel.doctor_specialty_keys.indexOf(ds.$key) !== -1) {
				this.doctorModel.$DoctorSpecialty.push(ds);
				if (ds.is_main === true) {
					this.mainDoctorSpecialtyModel = ds;
				}
			}
		})
	}

	private setServices() {
		this.doctorModel.doctor_service_keys = this.doctorModel.doctor_service_keys || [];
		this.doctorModel.$DoctorService = [];
		this.doctorServices.map(ds => {
			if (this.doctorModel.doctor_service_keys.indexOf(ds.$key) !== -1) {
				this.doctorModel.$DoctorService.push(ds);
			}
		})
	}
}
