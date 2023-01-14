export interface ITour {
	id: string,
	name: string,
	description: string,
	tourOperator: string,
	price: string,
	img: string,
	type: string,
	date: string,
	location: string
}

export interface ITourClient {
	name: string,
	description: string,
	tourOperator: string,
	price: string,
	location: string,
	img: string
}