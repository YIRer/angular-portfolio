import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PhotoComponent } from './portfolio/photo/photo.component'

const appRoutes : Routes =[
  {
    path:'',
    component:MainComponent
  },
  {
    path:'portfolio/photo',
    component:PhotoComponent
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
