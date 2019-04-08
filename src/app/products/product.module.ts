import {NgModule} from '@angular/core';
import { ProductSearchPipe } from './productsearchpipe.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { DiscountPipe } from './discountPipe.pipe';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[
        RouterModule.forChild([            
            {path: 'products', component:ProductsComponent},
            {path:'products/:id', component:ProductDetailComponent}
        ]),
        SharedModule
    ],
    declarations:[
        ProductSearchPipe,
        ProductDetailComponent,
        DiscountPipe,
        ProductsComponent,
        ProductDetailComponent
    ],
    providers:[
        ProductService
    ]
})

export class ProductModule{

}