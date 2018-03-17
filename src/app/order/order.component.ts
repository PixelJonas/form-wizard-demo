import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getOrderForm } from './order-store/selector';
import { cast } from 'ngrx-forms';
import { UserService } from '../users/user.service';

@Component({
  selector: 'wizz-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  formState$;

  constructor(private store: Store<any>, private userService: UserService) {
    this.formState$ = store.select(getOrderForm);
  }

}
