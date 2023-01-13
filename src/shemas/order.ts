import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {IOrder} from "../interfaces/Order";

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order implements IOrder{

	@Prop()	age: string;
	@Prop()	birthDay: string;
	@Prop()	cardNumber: string;
	@Prop()	tourId: string;
	@Prop()	userId: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);