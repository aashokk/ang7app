import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './company-list/company-list.component';
const routes: Routes = [
  {
    path : 'company',
    children : [
      {
        path : '',
        component : CompanyComponent
      },
      {
        path : 'company-list',
        component : CompanyListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
