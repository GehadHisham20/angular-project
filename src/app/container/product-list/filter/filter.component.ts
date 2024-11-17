import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStockCount: number = 0;
  @Input()
  outOfStockCount: number = 0;

  selectedFilterRadioBtn: string = 'all';

  @Output()
  selectedFilterRadioBtnChangedEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  onSelectedFilterRadioBtnChange() {
    this.selectedFilterRadioBtnChangedEmitter.emit(this.selectedFilterRadioBtn);
  }
}
