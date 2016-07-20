import { Injectable } from '@angular/core';

import { Insurance } from './insurance.model';

@Injectable()
export class InsuranceService {

  	constructor() {}

	getList(): Promise<Insurance[]> {
	  	return Promise.resolve(InsuranceData);
	}

	save(insurance: Insurance): Promise<Insurance> {
		if (insurance.id) {
			return this.update(insurance);
		}
		return this.add(insurance);
	}

	update(insurance: Insurance): Promise<Insurance> {
		return Promise.resolve(insurance);
	}

	add(insurance: Insurance): Promise<Insurance> {
		insurance.id = InsuranceData.length + 1;
		InsuranceData.push(insurance);
		return Promise.resolve(insurance);
	}

	remove(index: number): Promise<number> {
		InsuranceData.splice(index, 1);
		return Promise.resolve(index);
	}
}

const InsuranceData : Insurance[] = [
	new Insurance({id : 1, name : "Каско"}),
	new Insurance({id : 2, name : "Юнеско"})
];
