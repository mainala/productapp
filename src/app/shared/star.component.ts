import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
    selector:"app-star",
    templateUrl:"./star.component.html",
    styleUrls:["./star.component.css"]
})

export class StarComponent implements OnChanges{
    starWidth:number;    
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 86 / 6;
    }

    starClicked():void{
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }
}

/*
output act as event
input acts as property
*/