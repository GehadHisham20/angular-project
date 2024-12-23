import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  searchedText: string = '';
  @ViewChild(ProductListComponent)
  ProductListComponentInstance: ProductListComponent;

  onSearch(value: string) {
    console.log(this.ProductListComponentInstance);
    this.searchedText = value;
  }
}
