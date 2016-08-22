import { Injectable } from '@angular/core';

import { Alert } from './alert.model';

export let AlertModel = Alert;

@Injectable()
export class AlertService {

  	constructor() {}

  	getList() : Alert[] {
  		return AlertData;
  	}		

  	add(alert : Alert) : void {
  		if (AlertData.findIndex(value => value.message === alert.message) === -1) {
  			AlertData.push(alert);
  		}
  	}

  	remove(index) : void {
		AlertData.splice(index, 1);
  	}
}

const AlertData : Alert[] = [];