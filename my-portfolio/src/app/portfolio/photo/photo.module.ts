import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo.component';
import { NewComponent } from './new/new.component';
import { PhotoItemComponent } from './photoItem/photoItem.component';
import { DetailComponent } from './detail/detail.component';

import {PhotoRoutingModule} from './photo-routing.module';

@NgModule({
  declarations: [
    PhotoComponent,
    NewComponent,
    DetailComponent,
    PhotoItemComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PhotoRoutingModule


  ]
})
export class PhotoModule {}
