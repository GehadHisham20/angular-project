import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output() //pass data to container comopnent
  onSearchEmitter: EventEmitter<string> = new EventEmitter<string>();

  onSearch(searchInputElement: HTMLInputElement) {
    this.searchText = searchInputElement.value;
    this.onSearchEmitter.emit(this.searchText);
  }
}
