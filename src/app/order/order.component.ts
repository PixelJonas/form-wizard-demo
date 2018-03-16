import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getOrderForm } from './order-store/selector';
import { cast } from 'ngrx-forms';

@Component({
  selector: 'wizz-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  formState$;

  constructor(private store: Store<any>) {
    this.formState$ = store.select(getOrderForm);
  }

}
