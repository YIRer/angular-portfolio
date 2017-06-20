import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // isClassVisible = false;
  @ViewChild('slide') slide:ElementRef
  @ViewChild('fadeShow') fadeShow:ElementRef
  constructor() { }

  classChanged(name:string){
    this.slide.nativeElement.className = 'animated slideOutLeft';
    setTimeout(()=>{
      this.slide.nativeElement.className = "hide";
      this.fadeShow.nativeElement.className = "animated fadeInUp";
    },500)
  }

  ngOnInit() {

  }
  openSite(){
     window.open('http://pf.i-make.kr:8080/caffebene/html/main/main.jsp', '_blank');
  }

}
