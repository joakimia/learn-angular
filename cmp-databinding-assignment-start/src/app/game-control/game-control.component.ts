import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter<{}>();

  timeoutRef = null;
  seconds = 0;

  constructor() {}

  ngOnInit() {}

  onStartGame() {
    this.timeoutRef = setInterval(() => {
      this.gameStarted.emit(this.seconds);
      this.seconds++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.timeoutRef);
  }
}
