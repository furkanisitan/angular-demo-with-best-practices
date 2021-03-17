import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '@src/environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  getByUsernameAndPassword(username: string, password: string): Observable<User> {
    return this.http.get<User[]>(this.baseUrl + `?username=${username}&&password=${password}`).pipe(
      map(users => {
        return users[0];
      })
    );
  }

}
