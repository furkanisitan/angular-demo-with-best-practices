import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '@app/core';
import {Product, ProductService} from '@app/data';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  productFilter: Product = new Product();
  products$: Observable<Array<Product>>;
  existCategoryId: boolean;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.searchFilter$.subscribe(filter => this.productFilter.title = filter);

    this.products$ = this.route.queryParamMap.pipe(
      switchMap(params => {
        const categoryId = Number(params.get('categoryId'));
        this.existCategoryId = !!categoryId;
        return categoryId ? this.productService.getAllByCategoryId(categoryId) : this.productService.getAllWithCategory();
      })
    );
  }

}
