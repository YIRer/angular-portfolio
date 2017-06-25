import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
isClassVisible = false;
  @ViewChild('slide') slide:ElementRef
  @ViewChild('fadeOut') fadeOut:ElementRef
  videoSrc : string;
  constructor() {
  const storageRef = firebase.storage().ref().child('program.mp4');
  storageRef.getDownloadURL().then(url => this.videoSrc = url);
 }

  classChanged(name:string){
    this.slide.nativeElement.className = 'animated bounceOutDown';
    setTimeout(()=>{
      this.fadeOut.nativeElement.className = 'animated fadeOut';
    },700)
    setTimeout(()=>{
      this.isClassVisible = true;
    },1000)
  }

  ngOnInit() {
    this.isClassVisible = false;
  }

}
