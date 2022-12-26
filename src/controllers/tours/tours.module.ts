import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UsersService} from "../../services/users/users.service";
import {Tour, TourSchema} from "../../shemas/tour";
import {ToursService} from "../../services/tours/tours.service";

@Module({
  imports:[MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }])],
  providers: [ToursService],
  controllers: [ToursController]
})
export class ToursModule {}
