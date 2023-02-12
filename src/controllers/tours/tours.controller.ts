import { Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ToursService } from "../../services/tours/tours.service";
import { Promise } from "mongoose";
import { User } from "../../shemas/user";
import { ITour } from "../../interfaces/tour";
import { AuthGuardService } from "../../services/authentication/auth-guard/auth-guard.service";

@Controller('tours')
export class ToursController {

	constructor(private toursService: ToursService) {
	}

	@Post()
	initTours(): Promise<ITour[]>{
		this.toursService.generateTours();
		return this.toursService.getAllTours()
	}

	// @UseGuards(AuthGuardService)
	@Get()
	getAllTours(): Promise<ITour[]>{
		return this.toursService.getAllTours();
	}

	@Get(':id')
	getTourById(@Param('id') id): Promise<ITour>{
		return this.toursService.getTourById(id);
	}

	@Delete(':remove')
	removeAllTours(@Param('remove') remove): void{
		this.toursService.deleteTours()
	}
}
