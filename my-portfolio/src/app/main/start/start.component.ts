import { Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  coffee:string;
  album:string;
  loadedCheck = new Subject();
  coffeeLoaded = new Subject<boolean>();
  albumLoaded = new Subject<boolean>();
  imgLoad1 =false;
  imgLoad2 =false;

  constructor() {
    const coffee = firebase.storage().ref().child('coffee.png');
    const album = firebase.storage().ref().child('photo.png');
    coffee.getDownloadURL().then(url => this.coffee = url);
    album.getDownloadURL().then(url => this.album = url);


  }

  ngOnInit() {
    this.albumLoaded.subscribe((value:boolean)=>{
      if(value ===  true){
        this.imgLoad1 =true;
        this.loadedCheck.next();
      }
    });
    this.coffeeLoaded.subscribe((value:boolean)=>{
      if(value ===  true){
        this.imgLoad2 =true;
        this.loadedCheck.next();
      }
    });
    this.loadedCheck.subscribe(()=>{
      if(this.imgLoad1 === true && this.imgLoad2 === true){
        setTimeout(()=>{
          $('#loading').addClass("hide");
          $('#fadeShow').removeClass("hide");
          $('#fadeShow').addClass("animated fadeInUp");
        },500)
      }
    })
  }
  albumLoad(){
    this.albumLoaded.next(true);
  }
  coffeeLoad(){
    this.coffeeLoaded.next(true);
  }
  openSite(){
     window.open('http://pf.i-make.kr:8080/caffebene/html/main/main.jsp', '_blank');
  }
}
