import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit {
  @Output() clicked = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.clicked.emit();
  }
}
