import { Injectable } from '@angular/core';

import {Discount} from "./discount.model"

@Injectable()
export class DiscountService {

  	constructor() {}

	getList(): Promise<Discount[]> {
	  	return Promise.resolve(DiscountData);
	}

	save(discount: Discount): Promise<Discount> {
		if (discount.id) {
			return this.update(discount);
		}
		return this.add(discount);
	}

	update(discount: Discount): Promise<Discount> {
		return Promise.resolve(discount);
	}

	add(discount: Discount): Promise<Discount> {
		discount.id = DiscountData.length + 1;
		DiscountData.push(discount);
		return Promise.resolve(discount);
	}

	remove(index: number): Promise<number> {
		DiscountData.splice(index, 1);
		return Promise.resolve(index);
	}
}

const DiscountData : Discount[] = [
	new Discount({
		id : 1,
		name : "Скидка 1",
		amount : 3
	}),
	new Discount({
		id : 2,
		name : "Скидка 2",
		amount : 5
	})
];
