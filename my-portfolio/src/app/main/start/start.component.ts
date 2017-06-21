import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  @ViewChild('fadeShow') fadeShow:ElementRef
  constructor() { }

  ngOnInit() {
    console.log('ss')
    setTimeout(()=>{
      this.fadeShow.nativeElement.className = "animated fadeInUp";
    },500)
  }
  openSite(){
     window.open('http://pf.i-make.kr:8080/caffebene/html/main/main.jsp', '_blank');
  }
}
