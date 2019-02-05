import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { from } from 'rxjs';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/discountPipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MyUpperPipe,
    DiscountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
