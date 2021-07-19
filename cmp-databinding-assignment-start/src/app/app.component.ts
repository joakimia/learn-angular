import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timeElapsed = [];

  onGameStarted(timeElapsed: number) {
    this.timeElapsed.push(timeElapsed);
  }
}
