import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { observable } from 'rxjs';
import { ProductsComponent } from './products/products.component';
import { ProductSearchPipe } from './products/productsearchpipe.pipe';
import { DiscountPipe } from './products/discountPipe.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductSearchPipe,
    DiscountPipe,
    ProductsComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }