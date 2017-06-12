import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

import { AppRoutingModule } from './app-routing.module';

import { FnService } from './shared/fnservice.service';
import { PhotoComponent } from './portfolio/photo/photo.component'

import { MasonryModule } from 'angular2-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule, MdNativeDateModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasonryModule,
    MaterialModule,
    MdNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [FnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
