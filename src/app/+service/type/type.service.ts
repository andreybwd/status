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
	new ServiceType({id : 1, name : "Первичная"}),
	new ServiceType({id : 2, name : "Вторичная"}),
	new ServiceType({id : 3, name : "Манипуляция", type : "manipulation"}),
	new ServiceType({id : 4, name : "Рентген"}),
	new ServiceType({id : 5, name : "УЗД"}),
	new ServiceType({id : 6, name : "Лаборатория"})
];