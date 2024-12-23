import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';

  @Output() //pass data to container comopnent
  onSearchEmitter: EventEmitter<string> = new EventEmitter<string>();

  //incase we use a ViewChild docorator to get ref of element
  @ViewChild('searchInput') searchInputElementRef: ElementRef;

  // onSearch(searchInputElement: HTMLInputElement) { //incase we pass the elementRef from outside
  // this.searchText = searchInputElement.value; //incase we pass the elementRef from outside
  onSearch() {
    //incase we use a ViewChild docorator to get ref of element
    this.searchText = this.searchInputElementRef.nativeElement.value; //incase we use a ViewChild docorator to get ref of element
    this.onSearchEmitter.emit(this.searchText);
  }
}
