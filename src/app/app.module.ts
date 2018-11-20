import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';

// Components to be angular elements hahaha.
import { ChatboxComponent } from './chat/chatbox/chatbox.component';
import { BubblesComponent } from './chat/bubbles/bubbles.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [AppComponent, ChatboxComponent, BubblesComponent, ChatComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule],
  entryComponents: [ChatboxComponent, BubblesComponent, ChatComponent],
  providers: [],
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
