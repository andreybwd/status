import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuth } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
	user : any = {};

    constructor(
    	private af: AngularFire = null, 
    	private auth: FirebaseAuth = null,
    	private router: Router = null
    ) {
    	this.af.auth.subscribe(auth => this.user = auth);
    }

    signUp(email: string, password: string) {
        var creds: any = { email: email, password: password };
        this.af.auth.createUser(creds);
    }

    login(email: string, password: string): Promise<boolean> {
        var creds: any = { email: email, password: password };
        var res: Promise<boolean> = new Promise((resolve, reject) => {
            this.af.auth.login(creds).then(result => {
                resolve(result);
            }, reason => {
            	reject(reason);
            })
        });
        return res;
    }

    logout() {
		this.af.auth.logout();
		this.router.navigateByUrl('/login');
    }

    isLogin(): Promise<boolean> {
        var res: Promise<boolean> = new Promise((resolve, reject) => {
            this.af.auth.subscribe(auth => {
            	if (auth && auth.uid) {
            		resolve(true);
            	}
            	resolve(false);
            });
        });
        return res;
    }
}