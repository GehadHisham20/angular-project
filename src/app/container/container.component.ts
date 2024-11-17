import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
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
