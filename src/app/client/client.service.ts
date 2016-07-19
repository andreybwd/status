import { Injectable } from '@angular/core';

import { Client } from './client.model';

@Injectable()
export class ClientService {

  	constructor() {}

	getList(): Promise<Client[]> {
	  	return Promise.resolve(ClientData);
	}

	save(client: Client): Promise<Client> {
		if (client.id) {
			return this.update(client);
		}
		return this.add(client);
	}

	update(client: Client): Promise<Client> {
		return Promise.resolve(client);
	}

	add(client: Client): Promise<Client> {
		client.id = ClientData.length + 1;
		ClientData.push(client);
		return Promise.resolve(client);
	}

	remove(index: number): Promise<number> {
		ClientData.splice(index, 1);
		return Promise.resolve(index);
	}
}

const ClientData : Client[] = [
	new Client({
		id : 1,
		name : "Петров Иван",
		phone : "0631111111",
		town : "Винница",
		sex : "0"
	}),
	new Client({
		id : 2,
		name : "Иванов Петр",
		phone : "0672222222",
		town : "Житомир",
		sex : "0"
	}),
	new Client({
		id : 3,
		name : "Надежда Ивановна",
		phone : "0443333333",
		town : "Киев",
		sex : "1"
	})
];
