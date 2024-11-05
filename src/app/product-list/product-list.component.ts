import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  addToCart: number = 0;
  product = {
    pImage: '/assets/samsung.webp',
    name: 'samsung',
    price: 150,
    color: 'red',
    discount: 8.5,
    inStock: 10,
  };

  getDiscountedPrice() {
    return (
      this.product.price -
      this.product.price * (this.product.discount / 100)
    ).toFixed(2);
  }
  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }
}
