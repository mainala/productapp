import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { observable } from 'rxjs';
import {RouterModule} from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductSearchPipe } from './products/productsearchpipe.pipe';
import { DiscountPipe } from './products/discountPipe.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import {  OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './shared/NotFound.Component';


@NgModule({
  declarations: [
    AppComponent,
    ProductSearchPipe,
    DiscountPipe,
    ProductsComponent,
    StarComponent,
    HomeComponent,
    OrderComponent,
    ProductDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'products', component:ProductsComponent},
      {path:'products/:id', component:ProductDetailComponent},
      {path:'orders', component:OrderComponent},
      {path: 'home', component:HomeComponent},
      {path: '', redirectTo:'home', component:ProductsComponent, pathMatch:'full'},
      {path: '**', component:NotFoundComponent}
    ])
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }