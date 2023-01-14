import { Controller, Get, Param } from "@nestjs/common";
import { Promise } from "mongoose";
import { ITour } from "../../interfaces/tour";
import { ToursService } from "../../services/tours/tours.service";

@Controller('tour-search')
export class TourSearchController {

	constructor(private toursService: ToursService) {
	}

	@Get(':name')
	getTourById(@Param('name') name): Promise<ITour[]>{
		return this.toursService.getTourByName(name);
	}
}
