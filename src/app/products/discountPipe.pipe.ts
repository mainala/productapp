import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'discount'
})

export class DiscountPipe implements PipeTransform{
    transform(value:number, percent:number){
        value = ((1-(percent/100))*value);
        return value;
    }
}