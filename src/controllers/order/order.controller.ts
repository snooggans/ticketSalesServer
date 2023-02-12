import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
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
		const orderData = new OrderDto(data.clientName, data.clientSurname, data.age, data.birthDay, data.cardNumber, data.tourId, data.userId, data.citizen);
		this.orderService.sendOrder(orderData);
	}

	@Get(':uid')
	getAllUserOrders(@Param('uid') uid): Promise<IOrder[]>{
		return this.orderService.getAllUserOrders(uid);
	}

	@Get()
	getAllOrders(): Promise<IOrder[]>{
		return this.orderService.getAllOrders();
	}

	@Delete(':oid')
	deleteOrderById(@Param('oid') oid): void{
		this.orderService.deleteOrderById(oid);
	}
}
