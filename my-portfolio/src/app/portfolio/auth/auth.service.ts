import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService{
  token:string;
  constructor(private router:Router){}
  loginUser(email:string, password:string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error=> console.log(error)
    )
  }
  registerUser(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response=>{
        this.router.navigate(['portfolio/auth']);
        console.log(response);
        firebase.auth().currentUser.getToken()
        .then(
          (token:string)=> this.token = token
        )
      }
    )
    .catch(
      error=> console.log(error)
    )
  }

}
