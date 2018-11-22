import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Room } from './room.interface';

@Injectable()
export class SocketIoService {
  constructor(private socket: Socket) {}

  rooms = this.socket.fromEvent<Room[]>('rooms');
  currentRoom = this.socket.fromEvent<Room>('room');

  // for registration.
  addUser(user) {
    this.socket.emit('addUser', user);
  }

  // create room event.
  addRoom(room) {
    this.socket.emit('addRoom', room);
  }

  // enter room event.
  enterRoom(id) {
    console.log(id);
    this.socket.emit('enterRoom', id);
  }

  // chat event.
  chat(room) {
    this.socket.emit('chat', room);
  }
}
