import { Product } from './../../Models/Product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent {
  @Input()
  selectedProduct: Product;
}
