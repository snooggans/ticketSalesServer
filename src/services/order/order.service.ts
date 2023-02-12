import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Order, OrderDocument } from "../../shemas/order";
import { Model } from "mongoose";
import { OrderDto } from "../../dto/order-dto";
import { ITour } from "../../interfaces/tour";
import { IOrder } from "../../interfaces/order";

@Injectable()
export class OrderService {
	constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {
	}

	async sendOrder(data: OrderDto): Promise<Order>{
		const orderData = new this.orderModel(data);
		return orderData.save()
	}

	async getAllUserOrders(uid): Promise<IOrder[]>{
		return this.orderModel.find({userId: uid})
	}

	async getAllOrders(): Promise<IOrder[]>{
		return this.orderModel.find()
	}

	async deleteOrderById(oid): Promise<any>{
		return this.orderModel.deleteOne({_id: oid})
	}
}
