import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketIoService } from 'src/app/socket-io/socket-io.service';
import { Observable } from 'rxjs';
import { Room } from '../../socket-io/room.interface';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit, OnDestroy {
  rooms: Observable<Room[]>;

  constructor(private socketIoService: SocketIoService) {}

  ngOnInit() {
    this.rooms = this.socketIoService.rooms;
  }

  ngOnDestroy() {}

  onCreateRoom() {
    const room = {
      title: 'Test Room',
      messages: [],
    };
    this.socketIoService.addRoom(room);
  }

  onEnterRoom(id) {
    this.socketIoService.enterRoom(id);
  }
}
