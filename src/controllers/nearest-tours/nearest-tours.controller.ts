import { Controller, Get, Param } from "@nestjs/common";
import { Promise } from "mongoose";
import { ITour } from "../../interfaces/tour";
import { ToursService } from "../../services/tours/tours.service";

@Controller('nearest-tours')
export class NearestToursController {

	constructor(private toursService: ToursService) {
	}

	@Get(':loc')
	getNearestTours(@Param('loc') loc): Promise<ITour[]>{
		return this.toursService.getNearestTours(loc);
	}

	// @Get()
	// getNearestTours(): Promise<ITour[]>{
	// 	return this.toursService.getNearestTours();
	// }
}
