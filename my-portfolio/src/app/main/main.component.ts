import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
isClassVisible = false;
  @ViewChild('slide') slide:ElementRef
  constructor() {
 }

  classChanged(name:string){
    this.slide.nativeElement.className = 'animated bounceOutDown';
    setTimeout(()=>{
      this.isClassVisible = true;
    },1000)
  }

  ngOnInit() {
    this.isClassVisible = false;
  }
}
