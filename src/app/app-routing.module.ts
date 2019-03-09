import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'studentdetails', pathMatch : "full"
  },
  {
    path : 'student', children : [
      {
        path : "", component : StudentsComponent
      },
      {
        path : 'studentdetails' , component : StudentdetailsComponent
      }
    ]  
  },
  
  {
    path : '**', component : PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
