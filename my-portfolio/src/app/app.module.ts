import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
//routing
import { AppRoutingModule } from './app-routing.module';
//service
import { FnService } from './shared/fnservice.service';
// pipe
import { ShortenPipe } from './shared/shorten.pipe';
//modal

import { MasonryModule } from 'angular2-masonry';
// import { PhotoComponent } from './portfolio/photo/photo.component';
// import { NewComponent } from './portfolio/photo/new/new.component';
// import { EditComponent } from './portfolio/photo/edit/edit.component';
import { PhotoService } from './portfolio/photo/photo.service';
// import { ItemComponent } from './portfolio/photo/item/item.component';
// import { DetailComponent } from './portfolio/photo/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MasonryModule,
    ReactiveFormsModule
  ],
  providers: [FnService,PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
