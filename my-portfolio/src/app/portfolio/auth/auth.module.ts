import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule,
    AuthService

  ]
})

export class AuthModule{

}
