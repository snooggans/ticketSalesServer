import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Tour, TourDocument} from "../../shemas/tour";

@Injectable()
export class ToursService {

	private toursCount = 10;

	constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {
		this.generateTours();
	}

	generateTours(): Promise<Tour> {
		for (let i = 0; i <= this.toursCount; i++){
			const tourData = new this.tourModel({name: 'New Tour ' + i});
			return tourData.save()
		}
	}
}