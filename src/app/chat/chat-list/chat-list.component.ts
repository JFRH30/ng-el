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
  constructor(private socket: SocketIoService) {
    this.socket.getRooms();
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
