import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';
import { ClearAsyncErrorAction, SetAsyncErrorAction, StartAsyncValidationAction } from 'ngrx-forms';
import { getGeneralForm } from './application.selector';

@Injectable()
export class AsyncValidationEffects {

  @Effect()
  usernameSearch$ = this.store.select(getGeneralForm).pipe(
    filter((formState) => formState.value.username.length >= 3),
    distinctUntilChanged((x, y) => x.value.username === y.value.username),
    switchMap((formState) => {
      return this.store.select((s) => s.user.users).pipe(
        map((users) => {
          if (users.filter((user) => user.username.toUpperCase() === formState.value.username.toUpperCase()).length === 0) {
            return new ClearAsyncErrorAction(formState.controls.username.id, 'exists');
          } else {
            return new SetAsyncErrorAction(formState.controls.username.id, 'exists', true);
          }
        }),
        startWith(new StartAsyncValidationAction(formState.controls.username.id, 'exists')),
      );
    }),
  );

  constructor(private store: Store<any>) {
  }
}

