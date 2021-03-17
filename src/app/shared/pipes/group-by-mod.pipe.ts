import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'groupByMod'
})
export class GroupByModPipe implements PipeTransform {

  transform<T>(value: Array<T>, mod: number): Array<Array<T>> {

    if (value == null) {
      return new Array<Array<T>>();
    }

    if (mod < 2) {
      return new Array<Array<T>>(value);
    }

    const matrix = new Array<Array<T>>();
    for (let i = 0; i < value.length; i++) {
      if (i < mod) {
        matrix[i] = new Array<T>();
      }
      matrix[i % mod].push(value[i]);
    }
    return matrix;
  }

}
