import { Injectable } from '@angular/core';
import { Service } from './service.model';
import { ServicesTypesData }  from "./type/type.service";

@Injectable()
export class ServiceService {

	constructor() {}

	getList(): Promise<Service[]> {
	  	return Promise.resolve(ServicesData);
	}

	save(service: Service): Promise<Service> {
		if (service.id) {
			return this.update(service);
		}
		return this.add(service);
	}

	add(service: Service): Promise<Service> {
		service.id = ServicesData.length + 1;
		ServicesData.push(service);
		return Promise.resolve(service);
	}

	update(service: Service): Promise<Service> {
		return Promise.resolve(service);
	}

	remove(index: number): Promise<number> {
		ServicesData.splice(index, 1);
		return Promise.resolve(index);
	}
}

export const ServicesData: Service[] = [
	new Service(1, "Вырезать ампедицит", ServicesTypesData[0], 15),
	new Service(2, "Сменить швы", ServicesTypesData[1], 25),
	new Service(3, "Перевязка", ServicesTypesData[2], 20),
	new Service(4, "Перемотка", ServicesTypesData[2], 10),
	new Service(5, "Снимок ноги", ServicesTypesData[3], 15)
];
