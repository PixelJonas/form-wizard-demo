import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { OrderService } from './order.service';
import { OrderComponent } from './order.component';
import { SharedModule } from '../shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';
import { NgrxFormsModule } from 'ngrx-forms';

import { orderFormReducer } from './order-store/reducer';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgrxFormsModule,
    OrderRoutingModule,
    StoreModule.forFeature('order', orderFormReducer),
  ],
  exports: [
    OrderComponent,
  ],
  declarations: [OrderComponent],
  providers: [OrderService],
})
export class OrderModule {
}
