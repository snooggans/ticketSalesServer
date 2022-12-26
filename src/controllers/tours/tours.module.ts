import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UsersService} from "../../services/users/users.service";
import {Tour, TourSchema} from "../../shemas/tour";
import {ToursService} from "../../services/tours/tours.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../../static/private/constants";
import { AuthService } from "../../services/auth/auth.service";

@Module({
  imports:[MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }]),
  PassportModule,
  JwtModule.register({secret: jwtConstants.secret})],
  providers: [ToursService, AuthService],
  controllers: [ToursController]
})
export class ToursModule {}
