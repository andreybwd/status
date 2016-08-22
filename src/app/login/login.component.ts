import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AlertComponent } from 'ng2-bootstrap';

import { UserService } from '../common/user/user.service';

import { AlertService } from '../common/alert/alert.service';
import { Alert } from '../common/alert/alert.model';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [AlertComponent]
})
export class LoginComponent implements OnInit {
	alerts : Alert[] = [];
	email: string;
    password: string;

    constructor(
		public alertService : AlertService = new AlertService,
    	public userService: UserService = new UserService,
    	public router: Router = null
	) {
    	this.userService.isLogin().then(is_login => {
    		if (is_login) {
    			this.navigateToPanel();
    		}
    	});
	}

    ngOnInit() {
    	this.alerts = this.alertService.getList();
    }

    signup() {
        this.userService.signUp(this.email, this.password);
    }

    login() {
        this.userService.login(this.email, this.password).then((res) => {
            this.navigateToPanel();
        }, (reason) => {
        	this.alertService.add(new Alert({message : "Неправильный логин и/или пароль"}));
        });
    }

	removeAlert(index : number) : void {
		this.alertService.remove(index);
	}

    navigateToPanel() {
    	this.router.navigateByUrl('/manage/order-list');
    }
}
