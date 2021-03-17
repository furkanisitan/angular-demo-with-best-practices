import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService, DataService} from '@app/core';

@Component({
  selector: 'app-layout-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['../admin/admin.component.css']
})
export class AdminHeaderComponent {

  searchFilter: string;

  constructor(private router: Router,
              private dataService: DataService,
              private authenticationService: AuthenticationService) { }

  onChangeSearchFilter(filter: string): void { this.dataService.setSearchFilter(filter); }

  logout(): void {

    this.authenticationService.logout();
    this.router.navigateByUrl('/admin/login').then();
  }
}
