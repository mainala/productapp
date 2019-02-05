import {Pipe,  PipeTransform} from '@angular/core';

@Pipe({
    name: 'myUpper'
})

export class MyUpperPipe implements PipeTransform{
    transform(value:String, typereq:String){
        if(typereq === 'upper'){
            value = value.toUpperCase();
            value = `${value}`;
        }else{
            value=value.toLowerCase();
        }        
        return value;
    }
}