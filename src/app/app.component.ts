import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from "./newservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [NewserviceService]
})
export class AppComponent {
  title = 'ang7app';
  isvalid = true;
  choose = '';
  data : string = "ashok";  
  data1 : string = "kumar";
  pipeDate = new Date(2019,3,7);
  pipeCurrency = 50000;
  text : string;
  employees : any [];
  students :any [] = [
    {
      "name" : "ashok"
    },
    {
      "name" : "kumar"
    },
    {
      "name" : "sidd"
    },
  ];
  
  studentGroup : any [] = [
    {
      "country" : "India",
      "people" : [
        {
          "name" : "ashok"
        },
        {
          "name" : "kumar"
        }
      ]
    },
    {
      "country" : "USA",
      "people" : [
        {
          "name" : "sidd"
        },
        {
          "name" : "ashok"
        }
      ]
    }
    
  ];

  pipesArray : any[] = [
    {
      name : "ashok", "empid" : "emp001", "des" : "dev"
    },
    {
      name : "kumar", "empid" : "emp002", "des" : "Design"
    },
    {
      name : "sidd", "empid" : "emp003", "des" : "Ui"
    }
  ];

  pipeEmployee : any [] = [
    {
      name : "ashok", gender : "male", salary : 30000
    },
    {
      name : "Gwori", gender : "female", salary : 35000
    },
    {
      name : "kumar", gender : "male", salary : 50000
    },
  ];

  constructor(private router:Router, private _newservice:NewserviceService){}
ngOnInit(){
  this.employees = this._newservice.employees;
  this.text = this._newservice.display();
}

  student(){
      this.router.navigate(['/student']);
    }
    
  
  changeValue(valid){
    this.isvalid = valid;
  }
  changeOption(drp : any){
    this.choose = drp.target.value;
  }
}
