import { OrderFormState } from './reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const getOrderFeatureState = createFeatureSelector<OrderFormState>('order');

export const getOrderForm = createSelector(getOrderFeatureState, (state: OrderFormState) => state.orderForm);
