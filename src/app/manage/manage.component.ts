import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES} from '@angular/router';

import {AlertComponent} from 'ng2-bootstrap';

import {UserService} from '../common/user/user.service';

import {AlertService} from '../common/alert/alert.service';
import {Alert} from '../common/alert/alert.model';

@Component({
  moduleId: module.id,
  selector: 'app-manage',
  templateUrl: 'manage.component.html',
  styleUrls: ['manage.component.css'],
  directives: [ROUTER_DIRECTIVES, AlertComponent]
})
export class ManageComponent implements OnInit {
	alerts : Alert[] = [];
	is_navbar_show : boolean = true;

	constructor(
		public alertService : AlertService = new AlertService,
		public userService: UserService = new UserService
	) {
    	this.userService.isLogin().then(is_login => {
    		if (!is_login) {
    			this.logout();
    		}
    	});
	}

	ngOnInit() {
  		this.alerts = this.alertService.getList();
  	}

	removeAlert(index : number) : void {
		this.alertService.remove(index);
	}

	toogleNavBar() : void {
		this.is_navbar_show = !this.is_navbar_show;
	}

	logout() : void {
		this.userService.logout();
	}
}
