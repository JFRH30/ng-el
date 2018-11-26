import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Room, User } from './socket-io.interface';

@Injectable({
  providedIn: 'root',
})
export class SocketIoService {
  roomId = 0;
  constructor(private socket: Socket) {}

  user = this.socket.fromEvent<User>('user'); // hold the current user or the logged user.
  users = this.socket.fromEvent<User[]>('users'); // hold the collection of users.
  rooms = this.socket.fromEvent<Room[]>('rooms'); // hold the collection of rooms.

  /**
   * this the currentroom
   */
  get room() {
    return this.socket.fromEvent<Room>('room' + this.roomId);
  }

  /**
   * this is the one who joined the room.
   */
  get joinedRoom() {
    return this.socket.fromEvent<string>('join' + this.roomId);
  }

  /**
   * will emit 'addUser' event and user object to the node server,
   * and the server will emit 'user' event and 'users' event.
   * @param user object the will be event during 'addUser' event.
   */
  addUser(user) {
    user.id = this.generateID();
    this.socket.emit('addUser', user);
  }

  /**
   * will emit 'addRoom' event with room object to the node server,
   * and the server will emit 'room + id' event and 'rooms' event with updated data to everyone.
   * @param room object containing title and the owner.
   */
  addRoom(room) {
    this.socket.emit('addRoom', room);
  }

  /**
   * this will send id to the node server,
   * and the server will emit an event 'room + id' that we can listen.
   * @param roomId reference to the room.
   * @param username name of the user that joined in a room.
   */
  enterRoom(roomId, username) {
    const data = {
      id: roomId,
      name: username,
    };
    this.socket.emit('enterRoom', data);
  }

  /**
   * will emit 'chat' event with room object so node server can listen to this.
   * @param room object that contain updated messages.
   */
  chat(room) {
    this.socket.emit('chat', room);
  }

  /**
   * generate 5 character string as id.
   * this will be unique to everyone.
   */
  generateID() {
    const possible = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = '';
    for (let i = 0; i < 5; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id + Date.now();
  }
}
