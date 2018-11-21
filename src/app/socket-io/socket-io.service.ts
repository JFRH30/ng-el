import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class SocketIoService {
  constructor(private socket: Socket) {}

  /**
   * this will emit an event 'getRoom' and node server will listen to this and give the specific room.
   * @param id to refernece the room we need.
   */
  getRoom(id: string) {
    this.socket.emit('getRoom', id);
  }

  /**
   * this will emit 'getRooms' event and node server will listen to this and give all rooms this user has.
   */
  getRooms() {
    this.socket.emit('getRooms');
  }

  /**
   * @desc will emit 'addRoom' event and node server will listen to this and create the room.
   */
  addRoom() {
    this.socket.emit('addRoom', {});
  }

  /**
   * @desc will emit 'startChat' event.
   * this will only happen they start convo in specific room.
   */
  startChat(id: string) {
    this.socket.emit('startChat', id);
  }

  /**
   * @desc will emit 'deleteRoom' event and node will listen to this and delete the room.
   * @param id to reference the specific room.
   * Note: use this when user really want to delete the room to his/her room list.
   */
  deleteRoom(id: string) {
    this.socket.emit('deleteRoom', id);
  }
}
