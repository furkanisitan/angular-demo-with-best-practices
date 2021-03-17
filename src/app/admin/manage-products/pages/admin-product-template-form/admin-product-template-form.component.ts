import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AlertifyService} from '@app/core';
import {Category, CategoryService, Product, ProductService} from '@app/data';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-product-template-form',
  templateUrl: './admin-product-template-form.component.html',
  styleUrls: ['./admin-product-template-form.component.css']
})
export class AdminProductTemplateFormComponent implements OnInit {

  model: Product;
  categories$: Observable<Array<Category>>;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private alertifyService: AlertifyService) { }

  ngOnInit(): void {

    this.model = new Product();
    this.categories$ = this.categoryService.getAll();
  }

  onSubmit(form: NgForm): void {

    if (form.valid) {
      this.productService.add(this.model).subscribe(res => {
        form.resetForm();
        this.alertifyService.success(`Product added successfully. {id=${res.id}}`);
      });
    }
  }

}
