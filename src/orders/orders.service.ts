import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  constructor(@Inject('ORDERS_SERVICE') private rabbitMq: ClientProxy) {}
  create(createOrderDto: CreateOrderDto) {
    this.rabbitMq.emit('place-order', createOrderDto);
    return {
      msg: 'order is placed',
    };
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order ${updateOrderDto.productName}`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
