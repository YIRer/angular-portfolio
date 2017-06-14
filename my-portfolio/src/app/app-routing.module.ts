import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
const appRoutes : Routes =[
  {
    path:'',
    component: MainComponent
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
