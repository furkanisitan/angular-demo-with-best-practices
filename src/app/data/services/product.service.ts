import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '@src/environments/environment';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Product} from '../models';
import {handleError} from './handle-error';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.apiUrl + '/products';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.baseUrl);
  }

  getAllWithCategory(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.baseUrl + '?_expand=category');
  }

  getAllByCategoryId(categoryId: number): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.baseUrl + `?categoryId=${categoryId}`);
  }

  getByIdWithCategory(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + `/${id}?_expand=category`);
  }

  // getByIdWithCategory(id: number): Observable<Product> {
  //
  //   return this.http.get<Product>(this.baseUrl + `/${id}`).pipe(
  //     switchMap(product => {
  //       return this.categoryService.getById(product.categoryId).pipe(
  //         map(category => ({...product, category}))
  //       );
  //     })
  //   );
  // }

  add(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      catchError(handleError)
    );
  }
}
