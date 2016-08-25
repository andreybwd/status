import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap';

import {DiscountService} from "./discount.service";
import {Discount} from "./discount.model"

import {ServiceService} from "../+service/service.service";
import {Service} from "../+service/service.model";

import { FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-discount',
  templateUrl: 'discount.component.html',
  styleUrls: ['discount.component.css'],
  directives: [DATEPICKER_DIRECTIVES]
})
export class DiscountComponent implements OnInit {
	discounts : Discount[] = [];
	discountModel : Discount = new Discount; 

	services : Service[];

  	constructor(
  		public discountService : DiscountService,
  		public serviceService : ServiceService
	) {}

  	ngOnInit() {
  		this.discountService._getList().subscribe(discounts => this.discounts = discounts);
  		this.serviceService._getList().subscribe(services => this.services = services);
  	}

	save() {
		this.discountService.save(this.discountModel);

		this.discountModel = new Discount;
	}

	edit(discount : Discount) {
		this.discountModel = discount;
	}

	remove(key : string) {
		if (confirm("Удалить?")) {
			this.discountService.remove(key);
		}
	}

}
