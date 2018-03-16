import { Injectable } from '@angular/core';
import { Order } from '../core/model';
import { EntityServiceBase, EntityServiceFactory } from 'ngrx-data';

@Injectable()
export class OrderService extends EntityServiceBase<Order> {

  constructor(entityServiceFactory: EntityServiceFactory) {
    super('Order', entityServiceFactory);
  }

}
