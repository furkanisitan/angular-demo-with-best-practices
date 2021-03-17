import {Component, Input, OnInit} from '@angular/core';
import {Category, CategoryService} from '@app/data';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.css']
})
export class CategoriesNavComponent implements OnInit {

  @Input() routerText: string;
  categories$: Observable<Array<Category>>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAll();
  }
}
