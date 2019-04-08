import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

import {  OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/NotFound.Component';
import { HttpClientModule} from '@angular/common/http';
import { ProductModule } from './products/product.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'orders', component:OrderComponent},
      {path: 'home', component:HomeComponent},
      {path: '', redirectTo:'home', pathMatch:'full'},
      {path: '**', component:NotFoundComponent}
    ]),
    HttpClientModule,
    ProductModule,
    SharedModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }