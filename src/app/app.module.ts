import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WatchComponent } from './watch/watch.component';
import { WatchesService } from "./watches.service";
import { WatchFormComponent } from './watch-form/watch-form.component';
import {MatTableModule} from "@angular/material/table";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent,
    WatchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTableModule,
    MatTableModule,
    MatTableModule,
    MatTableModule,
    MatTableModule,
    MatTableModule,
    MatTableModule,
    MatTableModule,
    MatTableModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    WatchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
