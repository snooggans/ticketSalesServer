import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Tour, TourDocument} from "../../shemas/tour";
import { TourDto } from "../../dto/tour-dto";

@Injectable()
export class ToursService {

	private toursCount = 10;

	constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {
	}

	generateTours(): void {
		for (let i = 0; i <= this.toursCount; i++){
			const tour = new TourDto(
				`Tour name ${i}`,
				`Tour desc ${i}`,
				`Tour operator ${i}`,
				`Tour price ${i}`,

			);
			const tourData = new this.tourModel(tour)
			tourData.save()
		}
	}
}