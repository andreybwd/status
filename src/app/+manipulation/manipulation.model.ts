import {Service} from "../+service/service.model";

import { FirebaseObjectObservable } from 'angularfire2';

export class Manipulation {
	id : number;
	$key : string = "";
	service_key : string;
	$Service: Service;
	manipulation_keys : Array<string> = [];
	$Manipulations: Array<Service>;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}
