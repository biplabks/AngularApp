import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phoneStr: any): string {
    if(phoneStr.length !== 10) {
      return phoneStr;
    }

    let result = [];
    result.push(phoneStr.substring(0,3));
    result.push(phoneStr.substring(3,6));
    result.push(phoneStr.substring(6));

    return `(${result[0]}) ${result[1]}-${result[2]}`;
  }

}
