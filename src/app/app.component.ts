import { Component } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang7app';

  FormGroup : FormGroup;
  listCount : number;
  constructor(private fb : FormBuilder){}

  ngOnInit(){
    this.FormGroup = this.fb.group({
      itemRows : this.fb.array([this.initItemRow()])
    });
    console.log(this.FormGroup);
  }
  initItemRow(){
    return this.fb.group({
      Name : [''],
      Email : ['']
    });
  }
  addNewRow(){
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    console.log(control.push(this.initItemRow()));
    console.log('---');
  }

  
  deleteRow(index){
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    control.removeAt(index);
    console.log(index);
  }
}
