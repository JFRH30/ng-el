import { Injectable } from '@angular/core';
import { SocketIoService } from './socket-io/socket-io.service';
import { User, Room } from './socket-io/socket-io.interface';

@Injectable()
export class AppService {
  private serverUserId = ''; // this is for user for comparison.
  room: Room;

  constructor(public socket: SocketIoService) {}

  /**
   * will emit addUser event and listen to user event emitted by node server,
   * and save the data in localeStorage for comparison later.
   * @param user object holding the user information.
   */
  register(user: User) {
    this.socket.addUser(user);
    this.saveUserData();
  }

  /**
   * this will load the selectd room.
   */
  loadRoom() {
    this.socket.room.subscribe((room) => {
      this.room = room;
    });
  }

  /**
   * this will enter the user on a room and broadcast it to everyone in that room.
   * @param roomId reference to the room.
   */
  onEnterRoom(roomId) {
    this.socket.enterRoom(roomId, this.userName);
  }

  /**
   * save user data emitted by the server.
   * Note: this listen to 'user' event.
   */
  saveUserData() {
    this.socket.user.subscribe((user) => {
      this.serverUserId = user.id;
      // save the user emitted by the server.
      localStorage.setItem(`${user.id}`, JSON.stringify(user));
    });
  }

  /**
   * determine if the user exist in server.
   */
  get isLogged() {
    const user = <User>JSON.parse(localStorage.getItem(`${this.serverUserId}`));
    return !!user;
  }

  /**
   * get name save in locale storage.
   */
  get userID() {
    const user = <User>JSON.parse(localStorage.getItem(`${this.serverUserId}`));
    return user.id;
  }

  /**
   * get name save in locale storage.
   */
  get userName() {
    const user = <User>JSON.parse(localStorage.getItem(`${this.serverUserId}`));
    return user.name;
  }
}
