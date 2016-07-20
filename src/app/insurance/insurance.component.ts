import { Component, OnInit } from '@angular/core';

import { Insurance } from './insurance.model';
import { InsuranceService } from './insurance.service';

@Component({
  moduleId: module.id,
  selector: 'app-insurance',
  templateUrl: 'insurance.component.html',
  styleUrls: ['insurance.component.css']
})
export class InsuranceComponent implements OnInit {
	insuranceModel : Insurance = new Insurance;
	insurances : Insurance[] = [];

	constructor(
		public insuranceService: InsuranceService = new InsuranceService
	) {}

	ngOnInit() {
		this.insuranceService.getList().then(insurances => this.insurances = insurances);
	}

	save() {
		this.insuranceService.save(this.insuranceModel);

		this.insuranceModel = new Insurance;
	}
}
