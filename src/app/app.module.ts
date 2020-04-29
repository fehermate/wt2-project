import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WatchComponent } from './watch/watch.component';
import { WatchesService } from "./watches.service";

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    WatchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
