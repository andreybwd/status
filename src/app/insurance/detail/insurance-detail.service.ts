import { Injectable } from '@angular/core';

import { InsuranceDetail } from './insurance-detail.model';

@Injectable()
export class InsuranceDetailService {

  	constructor() {}

	getList(): Promise<InsuranceDetail[]> {
	  	return Promise.resolve(InsuranceDetailData);
	}

	save(insuranceDetail: InsuranceDetail): Promise<InsuranceDetail> {
		if (insuranceDetail.id) {
			return this.update(insuranceDetail);
		}
		return this.add(insuranceDetail);
	}

	update(insuranceDetail: InsuranceDetail): Promise<InsuranceDetail> {
		return Promise.resolve(insuranceDetail);
	}

	add(insuranceDetail: InsuranceDetail): Promise<InsuranceDetail> {
		insuranceDetail.id = InsuranceDetailData.length + 1;
		InsuranceDetailData.push(insuranceDetail);
		return Promise.resolve(insuranceDetail);
	}

	remove(index: number): Promise<number> {
		InsuranceDetailData.splice(index, 1);
		return Promise.resolve(index);
	}
}

const InsuranceDetailData : InsuranceDetail[] = [
	
];
