import {Pipe, PipeTransform} from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name:"productSearch"
})

export class ProductSearchPipe implements PipeTransform{
    transform(value: IProduct[], userData:string){
        userData = userData ? userData.toLowerCase():null;
        
         return userData ? value.filter((product:IProduct)=>
              (product.productName.toLowerCase().indexOf(userData) !== -1 )): value
         }
}