import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';

// Material Module
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

// Components to be angular elements hahaha.
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { ChatBoxComponent } from './chat/chat-box/chat-box.component';

@NgModule({
  declarations: [AppComponent, ChatComponent, ChatListComponent, ChatBoxComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  entryComponents: [ChatComponent, ChatListComponent, ChatBoxComponent],
  providers: [],
  bootstrap: [AppComponent],
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
