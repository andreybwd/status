import { Injectable } from '@angular/core';

import { Order } from './order.model';

@Injectable()
export class OrderService {

  	constructor() {}

	getList(): Promise<Order[]> {
	  	return Promise.resolve(OrderData);
	}

	save(order: Order): Promise<Order> {
		if (order.id) {
			return this.update(order);
		}
		return this.add(order);
	}

	update(order: Order): Promise<Order> {
		return Promise.resolve(order);
	}

	add(order: Order): Promise<Order> {
		order.id = OrderData.length + 1;
		OrderData.push(order);
		return Promise.resolve(order);
	}

	remove(index: number): Promise<number> {
		OrderData.splice(index, 1);
		return Promise.resolve(index);
	}
}

const OrderData : Order[] = [
	
];
