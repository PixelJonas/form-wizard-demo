import { Action } from '@ngrx/store';
import { createFormGroupState, formGroupReducer, FormGroupState } from 'ngrx-forms';
import { Order } from '../../core/model/index';

const FORM_ID = 'global_form_1';

const initialFormState = createFormGroupState<Order>(FORM_ID, {
  aircraft: null,
  installedPart: null,
  removedPart: null,
  referenceNumber: '',
});

export interface OrderFormState {
  orderForm: FormGroupState<Order>;
}

const initialState: OrderFormState = {
  orderForm: initialFormState,
};

export function orderFormReducer(state = initialState, action: Action): OrderFormState {
  const orderForm = formGroupReducer(state.orderForm, action);
  if (orderForm !== state.orderForm) {
    state = {...state, orderForm};
  }

  switch (action.type) {
    default: {
      return state;
    }
  }
}
