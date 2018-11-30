import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// Material Module
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

// Components to be angular elements hahaha.
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { ChatBoxComponent } from './chat/chat-box/chat-box.component';
import { AppService } from './app.service';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [ChatComponent, ChatListComponent, ChatBoxComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  entryComponents: [ChatComponent, ChatListComponent, ChatBoxComponent],
  providers: [AppService]
  // bootstrap: [ChatComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // this is the constructor.
    const el = createCustomElement(ChatComponent, { injector: this.injector });
    // this is where we let the window knows that there is chat-component element.
    customElements.define('chat-component', el);
  }
}
