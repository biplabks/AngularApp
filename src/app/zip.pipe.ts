import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zip'
})
export class ZipPipe implements PipeTransform {

  transform(zip: any): string {
    if (!zip || zip.match(/^\d+$/) === null) {
      return zip;
    }

    if (zip.length == 9) {
      return zip.slice(0, 5) + '-' + zip.slice(5);
    } else {
      return zip;
    }
  }
}
