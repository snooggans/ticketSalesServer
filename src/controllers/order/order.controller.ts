import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrderService } from "../../services/order/order.service";
import { OrderDto } from "../../dto/order-dto";
import { ITour } from "../../interfaces/tour";
import { IOrder } from "../../interfaces/order";

@Controller('orders')
export class OrderController {
	constructor(private orderService: OrderService) {
	}

	@Post()
	initOrder(@Body() data: OrderDto): void{
		const orderData = new OrderDto(data.age, data.birthDay, data.cardNumber, data.tourId, data.userId);
		this.orderService.sendOrder(orderData);
	}

	@Get(':uid')
	getAllOrders(@Param('uid') uid): Promise<IOrder[]>{
		return this.orderService.getAllOrders(uid);
	}
}
