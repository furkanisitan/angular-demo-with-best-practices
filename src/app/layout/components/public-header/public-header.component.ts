import {Component, OnInit} from '@angular/core';
import {AuthenticationService, DataService} from '@app/core';

@Component({
  selector: 'app-layout-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.css']
})
export class PublicHeaderComponent implements OnInit {

  searchFilter: string;
  searchBarVisible: boolean;
  isLogged: boolean;

  constructor(private dataService: DataService,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {

    this.isLogged = !!this.authenticationService.currentUserValue;
    this.dataService.searchBarVisible$.subscribe(visible => this.searchBarVisible = visible);
  }

  onChangeSearchFilter(filter: string): void { this.dataService.setSearchFilter(filter); }

}
