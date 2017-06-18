import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const authRoute: Routes = [
  { path: '', component: AuthComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoute)
  ],
  exports: [RouterModule],
  providers:[
  ]
})

export class AuthRoutingModule{}
