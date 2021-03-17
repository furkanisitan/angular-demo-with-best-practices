import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '@app/core';
import {Product, ProductService} from '@app/data';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  productFilter: Product = new Product();
  products$: Observable<Array<Product>>;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.setSearchBarVisible(true);
    this.dataService.searchFilter$.subscribe(filter => this.productFilter.title = filter);

    this.products$ = this.route.queryParamMap.pipe(
      switchMap(params => {
        const categoryId = Number(params.get('categoryId'));
        return categoryId ? this.productService.getAllByCategoryId(categoryId) : this.productService.getAll();
      })
    );
  }

  ngOnDestroy(): void {

    this.dataService.setSearchBarVisible(false);
  }

}
