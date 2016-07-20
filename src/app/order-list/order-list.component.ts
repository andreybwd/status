import { Component, OnInit } from '@angular/core';

import { Order } from '../order/order.model';
import { OrderService } from '../order/order.service';

@Component({
  moduleId: module.id,
  selector: 'app-order-list',
  templateUrl: 'order-list.component.html',
  styleUrls: ['order-list.component.css']
})
export class OrderListComponent implements OnInit {
	orders : Order[] = [];

	constructor(
		public orderService : OrderService = new OrderService
	) {}

	ngOnInit() {
		this.orderService.getList().then(orders => this.orders = orders);
	}

}
