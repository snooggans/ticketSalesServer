import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UsersService} from "../../services/users/users.service";
import {Tour, TourSchema} from "../../shemas/tour";
import {ToursService} from "../../services/tours/tours.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../../static/private/constants";
import { AuthService } from "../../services/authentication/auth/auth.service";
import { TourItemController } from "../tour-item/tour-item.controller";

@Module({
  imports:[MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }]),
  PassportModule,
  JwtModule.register({secret: jwtConstants.secret})],
  providers: [ToursService],
  controllers: [ToursController, TourItemController]
})
export class ToursModule {}
