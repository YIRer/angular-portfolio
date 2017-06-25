import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  coffee:string;
  album:string;
  @ViewChild('fadeShow') fadeShow:ElementRef
  constructor() {
    const coffee = firebase.storage().ref().child('coffee.png');
    const album = firebase.storage().ref().child('photo.png');
    coffee.getDownloadURL().then(url => this.coffee = url);
    album.getDownloadURL().then(url => this.album = url);

  }

  ngOnInit() {
    // console.log('ss')
    setTimeout(()=>{
      this.fadeShow.nativeElement.className = "animated fadeInUp";
    },500)
  }
  openSite(){
     window.open('http://pf.i-make.kr:8080/caffebene/html/main/main.jsp', '_blank');
  }
}
