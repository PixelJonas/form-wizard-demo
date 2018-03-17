import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './users.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('user', userReducer)
  ],
  declarations: [],
})
export class UserStoreModule {
}
