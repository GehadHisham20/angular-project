import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  searchedText: string = '';

  onSearch(value: string) {
    this.searchedText = value;
  }
}
