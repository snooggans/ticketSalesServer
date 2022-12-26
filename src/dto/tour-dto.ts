import { ITour } from "../interfaces/tour";

export class TourDto implements ITour{
	id: string;
	name: string;
	description: string;
	tourOperator: string;
	price: string;
	img: string;
	type: string;
	date: string;

	constructor(name, description, tourOperator, price) {
		this.name = name;
		this.description = description;
		this.tourOperator = tourOperator;
		this.price = price
	}
}