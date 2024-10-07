import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeedComponent } from './feed/feed.component';
import { HeaderComponent } from './feed/header/header.component';
import { NovoPostComponent } from './novoPost/novoPost.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    HeaderComponent,
    NovoPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
