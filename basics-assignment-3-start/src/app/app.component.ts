import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = false;
  timeStamps = [];

  onToggleDetails() {
    this.showParagraph = !this.showParagraph;
    this.timeStamps.push(new Date());
  }
}
