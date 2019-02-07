import { Component,OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit{
   constructor(private _productService:ProductService){}
   title: String = '***Products Page***';
   info: String='No of item searched ';
   imageStatus:String='Show Image';
   buttonStyle:String='btn btn-success';
   userInput:String='';
   showTable: Boolean = false;
   products: IProduct[];

   

   hideTable = () => {
   this.showTable ? this.imageStatus='Show Image' : this.imageStatus='Hide Image';
   this.showTable ? this.buttonStyle='btn btn-success' : this.buttonStyle='btn btn-danger'; 
   this.showTable = !this.showTable;  
   };

   onDataReceived(message:String):void{
      this.title=`~~~~~Product List~~~~~` + ` ` + message;
   }

   ngOnInit():void{
      this.products = this._productService.getProducts();
   }
}

