import {Component} from '@angular/core';

@Component({
  selector: 'app-layout-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
  host: {class: 'd-flex flex-column h-100'}
})
export class PublicComponent {
}
