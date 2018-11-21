import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Room } from './socket.interface';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  currentRoom = this.socket.fromEvent<Room>('room');
  rooms = this.socket.fromEvent<string[]>('rooms');

  constructor(private socket: Socket) {}

  getRoom(id: string) {
    this.socket.emit('getRoom', id);
  }

  addRoom() {
    this.socket.emit('addRoom', {
      id: this.generateID(),
      room: '',
    });
  }

  editRoom(room: Room) {
    this.socket.emit('editRoom', room);
  }

  private generateID() {
    let text = '';
    const possible = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
