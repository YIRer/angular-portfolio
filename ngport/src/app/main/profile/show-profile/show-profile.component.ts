import {
  Component,
  OnInit,
  HostListener,
  Inject,
  AfterViewChecked ,
  OnDestroy
} from '@angular/core';
import {Http} from '@angular/http';
import { DOCUMENT } from '@angular/platform-browser';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit, OnDestroy{
  profile:string
  data:any;
  // profileTrigger = false;
  // viewCtrl=false;
  profileImg = new Subject<boolean>();
  techImgSum = 0;
  techImgLoaded = new Subject<boolean>();
  endLoading = new Subject;
  a = false;
  b = false;

  // @ViewChild('introduce') introduce:ElementRef;
  // @ViewChild('profile') profileImg:ElementRef;
  ngOnInit() {
    this.profileImg.subscribe((value:boolean)=>{
      if(value === true){
        this.a = true;
        this.endLoading.next();
      }
    });
    this.techImgLoaded.subscribe((value:boolean)=>{
      if(value === true){
        this.b = true;
        this.endLoading.next();
      }
    });
    this.endLoading.subscribe(()=>{
      if(this.a === true && this.b ===true){
        $('#loading').addClass("hide");
        $("#profileMain").removeClass("hide");
        $("#introduce").removeClass("hide");
        $('#profileImg').addClass("animated fadeIn");
        for(let i = 0; i < this.data.length; i++){
          $('.techImg').eq(i).addClass("animated rotateIn")
        }
      }
    })
  }

  constructor(
      @Inject(DOCUMENT)
      private document: Document,
      private http : Http) {
    this.http.get('https://portfolio-project-768d9.firebaseio.com/logo.json')
    .subscribe(data => this.data = data.json(),
                err => console.log(err),
                () =>{
                  const profile = firebase.storage().ref().child('KakaoTalk_20161008_165029271.jpg');
                  profile.getDownloadURL().then(url => this.profile = url);
                  for(let i = 0; i <this.data.length ; i++){
                    firebase.storage().ref().child("logo/"+this.data[i].name+".png")
                    .getDownloadURL().then(url => this.data[i].imgUrl = url);
                  }
                });
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
     let number = this.document.body.scrollTop;
     let introduce = $('#introduce').offset().top - $('#introduce').outerHeight(true);
    //  console.log(number);

     if(number > introduce){
       $('#introduce').removeClass('animated fadeOut');
       $('#introduce').addClass('animated fadeIn');
     }else{
      $('#introduce').removeClass('animated fadeIn');
      $('#introduce').addClass('animated fadeOut');
     }
   }
   profileLoad(){
     console.log("sss");
    //  this.profileTrigger = true;
    $('#profileImg').removeClass("hide");
     this.profileImg.next(true);
   }
   techLoad(){
     this.techImgSum++;
     if(this.techImgSum === this.data.length){
       $('#tech').removeClass("hide");
       this.techImgLoaded.next(true);
     }

   }
  //  ngAfterViewChecked(){
  //    if(this.profileTrigger === true){
  //      let profileImg = this.profileImg;
  //      profileImg.nativeElement.className = "animated fadeIn"
  //    }
  //  }
  ngOnDestroy(){
    this.profileImg.unsubscribe();
  }
}
