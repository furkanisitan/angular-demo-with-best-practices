/**
 * forked from https://github.com/VadimDez/ngx-filter-pipe
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterBy',
  pure: false
})
export class FilterPipe implements PipeTransform {

  static isFoundOnWalking(value, key): boolean {
    let walker = value;
    let found = false;
    do {
      if (
        walker.hasOwnProperty(key) ||
        Object.getOwnPropertyDescriptor(walker, key)
      ) {
        found = true;
        break;
      }
      walker = Object.getPrototypeOf(walker);
    } while (walker);

    return found;
  }

  static isNumber(value): boolean {
    return !isNaN(parseInt(value, 10)) && isFinite(value);
  }

  /**
   * Checks function's value if type is function otherwise same value
   */
  static getValue(value: any): any {
    return typeof value === 'function' ? value() : value;
  }

  private filterByString(filter): (value) => boolean {
    if (filter) {
      filter = filter.toLowerCase();
    }
    return value =>
      !filter ||
      (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false);
  }

  private filterByBoolean(filter): (value) => boolean {
    return value => Boolean(value) === filter;
  }

  private filterByObject(filter): (value) => boolean {
    return value => {
      for (const key in filter) {
        if (!filter.hasOwnProperty(key)) {
          continue;
        }

        if (key === '$or') {
          if (!this.filterByOr(filter.$or)(FilterPipe.getValue(value))) {
            return false;
          }
          continue;
        }

        if (!value || !FilterPipe.isFoundOnWalking(value, key)) {
          return false;
        }

        if (!this.isMatching(filter[key], FilterPipe.getValue(value[key]))) {
          return false;
        }
      }

      return true;
    };
  }

  private isMatching(filter, val): boolean {
    switch (typeof filter) {
      case 'boolean':
        return this.filterByBoolean(filter)(val);
      case 'string':
        return this.filterByString(filter)(val);
      case 'object':
        return this.filterByObject(filter)(val);
    }
    return this.filterDefault(filter)(val);
  }

  /**
   * Filter value by $or
   */
  private filterByOr(filter: any[]): (value) => boolean {
    return (value: any) => {
      const length = filter.length;

      const arrayComparison = i => value.indexOf(filter[i]) !== -1;
      const otherComparison = i => this.isMatching(filter[i], value);
      const comparison = Array.isArray(value)
        ? arrayComparison
        : otherComparison;

      for (let i = 0; i < length; i++) {
        if (comparison(i)) {
          return true;
        }
      }

      return false;
    };
  }

  /**
   * Default filterDefault function
   */
  private filterDefault(filter): (value) => boolean {
    // tslint:disable-next-line:triple-equals
    return (value: any) => filter === undefined || filter == value;
  }

  transform<T>(items: Array<T>, filter: any): Array<T> {
    if (!items) {
      return items;
    }

    switch (typeof filter) {
      case 'boolean':
        return items.filter(this.filterByBoolean(filter));
      case 'string':
        if (FilterPipe.isNumber(filter)) {
          return items.filter(this.filterDefault(filter));
        }
        return items.filter(this.filterByString(filter));
      case 'object':
        return items.filter(this.filterByObject(filter));
      case 'function':
        return items.filter(filter);
    }
    return items.filter(this.filterDefault(filter));
  }

}
