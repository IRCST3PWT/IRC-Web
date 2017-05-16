import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MdToolbarModule, MdButtonModule } from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import 'normalize.css';

import { portofDivisiComponent } from "./portofDivisi/portofDivisi.component";

@NgModule({
  declarations: [
    AppComponent,
    portofDivisiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
