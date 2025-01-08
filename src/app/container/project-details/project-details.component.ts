import { Product } from './../../Models/Product';
import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent {
  // @Input()
  // selectedProduct: Product;

  @Input()
  ProductListComponentInstance: ProductListComponent = undefined;

  selectedProduct: Product;
  ngOnInit() {
    this.selectedProduct = this.ProductListComponentInstance.selectedProduct;
    console.log(this.selectedProduct);
  }
}
