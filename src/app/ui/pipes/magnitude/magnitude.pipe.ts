import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'magnitude'
})
export class MagnitudePipe implements PipeTransform {

  transform(value: number): string {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const suffixIndex: number = Math.floor((('' + value).length - 1) / 3);
    const shortendVal: number = parseFloat((value / Math.pow(1000, suffixIndex)).toPrecision(3));
    return shortendVal + suffixes[suffixIndex];
  }

}
