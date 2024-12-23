import { Component, Input } from '@angular/core';
import products from './productList';
import { Product } from '../../Models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = products;

  totalProductsCount = this.products.length;
  inStockProductsCount = this.products.filter((p) => !!p.is_in_inventory)
    .length;
  outOfStockProductsCount = this.products.filter((p) => !p.is_in_inventory)
    .length;
  selectedFilterBy: string = 'all';

  selectedProduct: Product;

  onFilterChanged(value: string) {
    this.selectedFilterBy = value;
  }
  //get data from container componet
  @Input()
  searchedText: string = '';
}
