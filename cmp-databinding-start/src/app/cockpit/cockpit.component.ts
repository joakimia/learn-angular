import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(
    newServerName: HTMLInputElement,
    newContentInput: HTMLInputElement
  ) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: newServerName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(
    newServerName: HTMLInputElement,
    newContentInput: HTMLInputElement
  ) {
    console.log(this.serverContentInput);
    this.blueprintCreated.emit({
      serverName: newServerName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}

// @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
