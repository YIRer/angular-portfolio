import {
  Component,
  OnInit,
  HostListener,
  OnDestroy
} from '@angular/core';
import {Http} from '@angular/http';
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
  profileImg = new Subject<boolean>();
  techImgSum = 0;
  techImgLoaded = new Subject<boolean>();
  endLoading = new Subject;
  oneStep = false;
  twoStep = false;

  ngOnInit() {
    // 로딩 체크
    this.profileImg.subscribe((value:boolean)=>{
      if(value === true){
        this.oneStep = true;
        this.endLoading.next();
      }
    });
    this.techImgLoaded.subscribe((value:boolean)=>{
      if(value === true){
        this.twoStep = true;
        this.endLoading.next();
      }
    });
    // 로딩완료시 에니메이션 표시
    this.endLoading.subscribe(()=>{
      if(this.oneStep === true && this.twoStep ===true){
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

  // 로딩 완료 시 체크
  profileLoad(){
    $('#profileImg').removeClass("hide");
    this.profileImg.next(true);
  }
  techLoad(){
    this.techImgSum++;
    if(this.techImgSum === this.data.length){
      $('#tech').removeClass("hide");
      for(let i = 0 ; i < this.techImgSum; i++){
        $('.techImg').eq(i).tooltip({trigger:'hover'});
      }
      this.techImgLoaded.next(true);
    }

  }
  constructor(
      private http : Http) {
        // 데이터 로드 및 도큐맨트 옵션사용
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
  // 스크롤 이벤트 체크
  @HostListener("scroll", ['$event'])
  // 스크롤시 발생할 이벤트
  onWindowScroll($event) {
     let number = $event.target.scrollTop;
     let introduce = $('#introduce').offset().top;
     if(number > introduce){
       $('#introduce').removeClass('animated fadeOut');
       $('#introduce').addClass('animated fadeIn');
     }else{
      $('#introduce').removeClass('animated fadeIn');
      $('#introduce').addClass('animated fadeOut');
     }
   }
  //  메모리 누수 방지
  ngOnDestroy(){
    this.profileImg.unsubscribe();
    this.techImgLoaded.unsubscribe();
    this.endLoading.unsubscribe()
  }
}
