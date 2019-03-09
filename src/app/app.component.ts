import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang7app';

  Register(regform){
   // debugger;
    var firstname = regform.controls.first_name.value;
    var lastname = regform.controls.last_name.value;
    var emailId = regform.controls.email_id.value;
    //console.log(regform);
  }
}
