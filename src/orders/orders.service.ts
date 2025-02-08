import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(@Inject('ORDERS_SERVICE') private rabbitMq: ClientProxy) {}
  create(createOrderDto: CreateOrderDto) {
    this.rabbitMq.emit('place-order', createOrderDto);
    return {
      msg: 'order is placed',
    };
  }

  getAllOrders() {
    return this.rabbitMq
      .send({ cmd: 'get-all-orders' }, {})
      .pipe(timeout(5000));
  }

  findOne(id) {
    return this.rabbitMq
      .send({ cmd: 'get-order-by-id' }, id)
      .pipe(timeout(5000));
  }
}
