import {AfterViewChecked, Component} from '@angular/core';

declare const feather: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  title = 'angular-demo-with-best-practices';

  ngAfterViewChecked(): void {
    feather.replace();
  }
}
