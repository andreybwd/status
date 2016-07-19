import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import {AlertComponent} from 'ng2-bootstrap';

import {AlertService} from './common/alert/alert.service';
import {Alert} from './common/alert/alert.model';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, AlertComponent]
})
export class AppComponent {
	alerts : Alert[] = [];
	is_navbar_show : boolean = true;

	constructor(
		public alertService : AlertService = new AlertService
	) {}

	ngOnInit() {
  		this.alerts = this.alertService.getList();
  	}

	removeAlert(index : number) : void {
		this.alertService.remove(index);
	}

	toogleNavBar() : void {
		this.is_navbar_show = !this.is_navbar_show;
	}
}
