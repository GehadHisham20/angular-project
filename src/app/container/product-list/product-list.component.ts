import { Component } from '@angular/core';
import products from './productList';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: {
    id: number;
    name: string;
    description: string;
    brand: string;
    gender: string;
    category: string;
    size: number[];
    color: (string | undefined)[];
    price: number;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    slug: string;
    discountPrice?: number;
  }[] = products;

  totalProductsCount = this.products.length;
  inStockProductsCount = this.products.filter((p) => !!p.is_in_inventory)
    .length;
  outOfStockProductsCount = this.products.filter((p) => !p.is_in_inventory)
    .length;
  selectedFilterBy: string = 'all';

  onFilterChanged(value: string) {
    this.selectedFilterBy = value;
  }
}
