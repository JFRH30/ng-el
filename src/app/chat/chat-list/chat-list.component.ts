import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Observable } from 'rxjs';
import { Room } from '../../socket-io/socket-io.interface';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit, OnDestroy {
  rooms: Observable<Room[]>;

  constructor(public app: AppService) {}

  ngOnInit() {
    this.rooms = this.app.socket.rooms;
  }

  ngOnDestroy() {}

  onCreateRoom() {
    const room = {
      title: this.app.socket.generateID(),
      messages: [],
    };
    this.app.socket.addRoom(room);
  }

  onEnterRoom(id) {
    this.app.socket.roomId = id;
    this.app.socket.enterRoom(id);
    this.app.loadRoom();
    console.log(this.app.socket.room);
    console.log('Room', this.app.room);
  }
}
