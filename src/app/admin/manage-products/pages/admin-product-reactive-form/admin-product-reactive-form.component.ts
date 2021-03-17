import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AlertifyService} from '@app/core';
import {Category, CategoryService, ProductService} from '@app/data';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-product-reactive-form',
  templateUrl: './admin-product-reactive-form.component.html',
  styleUrls: ['./admin-product-reactive-form.component.css']
})
export class AdminProductReactiveFormComponent implements OnInit {

  categories$: Observable<Array<Category>>;
  form: FormGroup;

  get title(): AbstractControl { return this.form.get('title'); }

  get description(): AbstractControl { return this.form.get('description'); }

  get price(): AbstractControl { return this.form.get('price'); }

  get image(): AbstractControl { return this.form.get('image'); }

  get categoryId(): AbstractControl { return this.form.get('categoryId'); }

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private categoryService: CategoryService,
              private alertifyService: AlertifyService) { }

  ngOnInit(): void {

    this.categories$ = this.categoryService.getAll();

    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  onSubmit(formDir: NgForm): void {

    if (this.form.valid) {
      this.productService.add(this.form.value).subscribe(res => {
        formDir.resetForm();
        this.alertifyService.success(`Product added successfully. {id=${res.id}}`);
      });
    }
  }

}
