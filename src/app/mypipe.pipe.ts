import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, gender : string): string {
    if(gender.toLowerCase() == "male"){
      return "Mr. "+value;
    } else {
      return "Miss. "+value;
    }
  }

}
