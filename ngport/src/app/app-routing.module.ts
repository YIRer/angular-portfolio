import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ProfileComponent } from './main/profile/profile.component';
import { ContactComponent } from './main/contact/contact.component';

const appRoutes : Routes =[
  {
    path:'',
    component: MainComponent
  },{
    path:'profile',
    component: ProfileComponent
  },{
    path:'contact',
    component: ContactComponent
  },
  {
    path:'portfolio',
    loadChildren:'./portfolio/portfolio.module#PortfolioModule'
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
