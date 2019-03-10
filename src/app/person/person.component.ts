import { Component } from '@angular/core';

@Component({
    template : `<p>Person component</p>
     <a [routerLink]="['person-list']" routerLinkActive="active" > Person List</a>
    `
})



export class PersonComponent{
    constructor(){
        console.log('person component loaded');
    }
}