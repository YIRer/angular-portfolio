import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PhotoComponent } from './portfolio/photo/photo.component';
//routing
import { AppRoutingModule } from './app-routing.module';
//service
import { FnService } from './shared/fnservice.service';
// pipe
import { ShortenPipe } from './shared/shorten.pipe';
//modal

import { MasonryModule } from 'angular2-masonry';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ShortenPipe,
    PhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MasonryModule
  ],
  providers: [FnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
