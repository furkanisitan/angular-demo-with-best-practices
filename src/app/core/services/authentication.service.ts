import {Injectable} from '@angular/core';
import {User} from '@app/data/models/user';
import {UserService} from '@app/data/services/user.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser$: Observable<User>;

  constructor(private userService: UserService) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User { return this.currentUserSubject.value; }

  login(username: string, password: string): Observable<User> {

    return this.userService.getByUsernameAndPassword(username, password).pipe(
      map(user => {

        if (user == null) {
          this.logout();
          throw new Error('Username or password is incorrect.');
        }

        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}
