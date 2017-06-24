import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MainComponent } from './main/main.component';
import { ProfileComponent } from './main/profile/profile.component';
import { ContactComponent } from './main/contact/contact.component';
//routing
import { AppRoutingModule } from './app-routing.module';

// pipe

import { ShortenPipe } from './shared/shorten.pipe'
//modal
import { MasonryModule } from 'angular2-masonry';

//service
import { PhotoService } from './portfolio/photo/photo.service';
import { DataService } from './shared/data.service';
//directive
import { DropdownDirective } from './shared/dropdownCtrl.directive';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './main/start/start.component';
import { ShowProfileComponent } from './main/profile/show-profile/show-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProfileComponent,
    ContactComponent,
    ShortenPipe,
    FooterComponent,
    StartComponent,
    ShowProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MasonryModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [PhotoService,DataService,DropdownDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
