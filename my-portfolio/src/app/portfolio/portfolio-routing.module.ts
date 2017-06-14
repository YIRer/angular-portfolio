import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

const portfolioRoutes: Routes = [
  { path: '', component: PortfolioComponent},
  { path: 'photo',
    loadChildren:'./photo/photo.module#PhotoModule' }


];

@NgModule({
  imports: [
    RouterModule.forChild(portfolioRoutes)
  ],
  exports: [RouterModule],
  providers:[
  ]
})
export class PortfolioRoutingModule {}
