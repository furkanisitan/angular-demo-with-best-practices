import {Category} from './category';

export class Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;

  categoryId: number;
  category: Category;
}
