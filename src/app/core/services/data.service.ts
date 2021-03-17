import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private searchFilter = new BehaviorSubject<string>('');
  searchFilter$ = this.searchFilter.asObservable();

  private searchBarVisible = new BehaviorSubject<boolean>(false);
  searchBarVisible$ = this.searchBarVisible.asObservable();

  constructor() { }

  setSearchFilter(filter: string): void { this.searchFilter.next(filter); }

  setSearchBarVisible(visible: boolean): void { this.searchBarVisible.next(visible); }
}
