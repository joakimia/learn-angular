import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() changeTab = new EventEmitter<number>();

  onSelectTab(tabIndex: number) {
    this.changeTab.emit(tabIndex);
  }
}
