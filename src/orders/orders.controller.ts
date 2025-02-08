import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { FindOrderByIdDto } from './dto/find-order-by-id.dto';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }
  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }
  @Get(':id')
  getOrderById(@Param() id: FindOrderByIdDto) {
    return this.ordersService.findOne(id);
  }
}
