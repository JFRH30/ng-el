import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SocketIoService } from 'src/app/socket-io/socket-io.service';
import { Room } from 'src/app/socket-io/room.interface';
import { startWith } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit {
  @Output() clicked = new EventEmitter();

  room: Room;

  constructor(private socketIoService: SocketIoService) {}

  ngOnInit() {
    this.socketIoService.currentRoom
      .pipe(startWith({ id: 0, title: 'Default' }))
      .subscribe((room) => (this.room = room));
  }

  onClick() {
    this.clicked.emit();
  }

  onSendChat(form: NgForm) {
    // todo needs  to check if the user is in a room .
    form.value.userId = 'qwertyui';
    form.value.user = 'default';
    const room = this.room;
    room.messages.push(form.value);
    this.socketIoService.chat(room);
  }
}
