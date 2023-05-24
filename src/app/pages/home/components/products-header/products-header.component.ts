import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12;

  constructor() { }

  ngOnInit(): void {

  }
  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpated(count : number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum); 
  }
}
