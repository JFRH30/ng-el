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
  constructor(public app: AppService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  /**
   * will create room with generatedID as room title.
   */
  onCreateRoom() {
    const room = {
      title: this.app.socket.generateID(),
      messages: [],
    };
    this.app.socket.addRoom(room);
  }

  /**
   * will send the room id to server and fetch room data.
   * @param id reference to the room.
   */
  onEnterRoom(id) {
    this.app.socket.roomId = id;
    this.app.onEnterRoom(id);
    this.app.loadRoom();
    console.log(this.app.socket.roomId);
  }
}
