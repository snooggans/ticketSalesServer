import { IOrder } from "../interfaces/order";

export class OrderDto implements IOrder{
	id: string;
	clientName: string | null;
	clientSurname: string | null;
	age: string;
	birthDay: string;
	cardNumber: string;
	tourId: string;
	userId: string;
	citizen: string | null;

	constructor(clientName, clientSurname, age, birthDay, cardNumber, tourId, userId,citizen) {
		this.clientName = clientName;
		this.clientSurname = clientSurname;
		this.age = age;
		this.birthDay = birthDay;
		this.cardNumber = cardNumber;
		this.tourId = tourId;
		this.userId = userId;
		this.citizen = citizen;
	}

}