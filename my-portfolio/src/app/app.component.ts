import { Component, OnInit } from '@angular/core';
import { MainComponent } from './main/main.component';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCI32dk2d_peMBf2tUDaniKe7p0w1qeHPo",
      authDomain: "portfolio-project-768d9.firebaseapp.com",
      storageBucket: "portfolio-project-768d9.appspot.com"
    });
  }
}
