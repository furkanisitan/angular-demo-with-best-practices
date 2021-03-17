import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '@src/environments/environment';
import {Observable} from 'rxjs';
import {Category} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = environment.apiUrl + '/categories';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.baseUrl);
  }
}
