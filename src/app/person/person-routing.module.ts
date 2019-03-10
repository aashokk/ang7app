import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component'
const routes: Routes = [
  {
    path : 'person',
    children : [
      {
        path : 'person-list',
        component : PersonListComponent
      },
      {
        path : '',
        component : PersonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
