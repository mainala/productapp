import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl:'./product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    id:number;
    name:string;
    description:string;
    image:string;

    constructor(private _route: ActivatedRoute){

    }

    ngOnInit():void{
        this.id = this._route.snapshot.params['id'];
        this._route.queryParams.subscribe((data) => {
            this.name= data['name'];
            this.description = data['description'];
            this.image = data['image'];
        })
    }
}