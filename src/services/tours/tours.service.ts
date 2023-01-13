import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Tour, TourDocument} from "../../shemas/tour";
import { TourDto } from "../../dto/tour-dto";
import { async } from "rxjs";
import { ITour, ITourClient } from "../../interfaces/tour";

@Injectable()
export class ToursService {

	private toursCount = 10;

	constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {
	}

	async getAllTours(): Promise<ITour[]>{
		return this.tourModel.find()
	}


	async getTourById(id): Promise<ITour>{
		return this.tourModel.findById(id)
	}

	async generateTours(): Promise<any> {
		for (let i = 0; i <= this.toursCount; i++){
			const tour = new TourDto(
				`Tour name ${i}`,
				`Tour desc ${i}`,
				`Tour operator ${i}`,
				`Tour price ${i}`,
				``
			);
			const tourData = new this.tourModel(tour)
			await tourData.save()
		}
	}

	async deleteTours(): Promise<any>{
		return this.tourModel.deleteMany({})
	}

	async uploadTour(body: ITourClient){
		const tour = new TourDto(body.name, body.description, body.tourOperator, body.price, body.img);
		const tourData = new this.tourModel(tour);
		await tourData.save()
	}

}