import { Component } from '@angular/core';

@Component({
    template : `<p>Welcome to Company </p>
        <a [routerLink]="['company-list']" routerLinkActive="active">Company List</a>
    `
})

export class CompanyComponent{
    constructor(){
        console.log('Company component loaded');
    }
}