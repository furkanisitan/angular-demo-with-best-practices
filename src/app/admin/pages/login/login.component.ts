import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertifyService, AuthenticationService} from '@app/core';
import {User} from '@app/data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertifyService: AlertifyService) { }

  ngOnInit(): void {

    if (this.authenticationService.currentUserValue) {
      this.router.navigateByUrl('/admin').then();
    }

    this.model = new User();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/admin';
  }

  onSubmit(valid: boolean): void {

    if (valid) {
      this.authenticationService.login(this.model.username, this.model.password).subscribe(
        res => {
          this.router.navigateByUrl(this.returnUrl).then();
        },
        error => {
          this.alertifyService.error(error.message);
        }
      );
    }
  }

}
