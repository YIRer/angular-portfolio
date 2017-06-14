import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { NewComponent } from './new/new.component';
import { PhotoItemComponent } from './photoItem/photoItem.component';
import { DetailComponent } from './detail/detail.component';

const photoRoutes: Routes = [
  { path: '', component: PhotoComponent},
  { path: 'new', component: NewComponent},
  { path: ':id', component: NewComponent },
  { path: ':id/edit', component: NewComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(photoRoutes)
  ],
  exports: [RouterModule],
  providers:[
  ]
})
export class PhotoRoutingModule {}
