import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'ang7app';

  signupForm : FormGroup;
  firstName : string ;
  lastName : string ;
  email : string ;
  password : string ;

  constructor(private formbuilder:FormBuilder){
    this.signupForm= formbuilder.group({
      // first_name : new FormControl(),
      // last_name : new FormControl(),
      // email_id : new FormControl(),
      // userpassword : new FormControl()
      first_name : ['',Validators.required],
      last_name : ['', Validators.required],
      email_id : ['', Validators.required],
      userpassword : ['', Validators.required]
    });
    // console.log(signupForm);
  }
  Register(regform){
   // debugger;
    var firstname = regform.controls.first_name.value;
    var lastname = regform.controls.last_name.value;
    var emailId = regform.controls.email_id.value;
    //console.log(regform);
  }
  PostData(signupForm:any){
    this.firstName = signupForm.controls.first_name.value;
    this.lastName = signupForm.controls.last_name.value;
    this.email = signupForm.controls.email_id.value;
    this.password = signupForm.controls.userpassword.value;
    console.log(signupForm);
  }

  getData(){
    this.firstName = this.signupForm.controls.first_name.value;
    this.lastName = this.signupForm.controls.last_name.value;
    this.email = this.signupForm.controls.email_id.value;
    this.password = this.signupForm.controls.userpassword.value;
    console.log(this.signupForm.value);
  }

  resetData(){
      this.signupForm.reset({
        first_name : '',
        last_name : '',
        email_id : '',
        userpassword : ''
      });
  }


  formGroup : FormGroup;
  form: any;
  ngOnInit(){
    // this.signupForm.controls.first_name.valueChanges.subscribe(
    //   uname => {
    //     console.log('first name was changed'+ uname);
    //   }
    // )
  /*
   //Form Status
    this.signupForm.statusChanges.subscribe(
      status => {
        console.log('Form status is '+status);
      }
    )
    */

    /* 
    // NESTED Array static sample
    const arr = new FormArray([
      new FormControl(),
      new FormControl()
    ]);
     // arr.setValue(['kumar']); //this servalue getting error message bcz there is a 2 form control are there
    arr.patchValue(['kumar']); /// it's wori=king fine bcz it's set the null value to automatic
    arr.reset(['kumar', 'ashok']);
    console.log(arr.value);
    console.log(arr.status);

    */
    //--------------
    // NESTED Array dynamic

    this.form = new FormGroup({
      contactNos : new FormArray([
        new FormControl('7667662644'),
        new FormControl('8610191367')
      ])
    });
    // console.log(this.form);
  }
  addContactNo(){
    console.log(this.form.get('contactNos').push(new FormControl()));
  }

  setPresent(){
    this.form.get('contactNos').patchValue(['123456','654321']);
  }
  onSubmit(){
    console.log(this.form.get('contactNos').value);
  }

}
