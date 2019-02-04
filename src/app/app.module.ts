import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { observable } from 'rxjs';
import { ProductsComponent } from './products/products.component';
import { ProductSearchPipe } from './products/productsearchpipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductSearchPipe,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
