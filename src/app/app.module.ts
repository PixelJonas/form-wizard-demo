import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from './order/order.module';
import { MaterialModule } from './material.module';
import { ApplicationModule } from './application/application.module';
import { UsersModule } from './users/users.module';
import { UserStoreModule } from './store/users/user-store.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AppStoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    OrderModule,
    ApplicationModule,
    UsersModule,
    UserStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
