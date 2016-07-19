import { Injectable } from '@angular/core';
import { ServiceType }  from "./type.model";

@Injectable()
export class ServiceTypeService {

	constructor() {}

	getList(): Promise<ServiceType[]> {
	  	return Promise.resolve(ServicesTypesData);
	}

	add(service: ServiceType): Promise<ServiceType> {
		service.id = ServicesTypesData.length + 1;
		ServicesTypesData.push(service);
		return Promise.resolve(service);
	}
}

export const ServicesTypesData: ServiceType[] = [
	new ServiceType(1, "Первичная"),
	new ServiceType(2, "Вторичная"),
	new ServiceType(3, "Манипуляция", "manipulation"),
	new ServiceType(4, "Рентген")
];