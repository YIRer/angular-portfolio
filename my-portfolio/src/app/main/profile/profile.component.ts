import { Component, OnInit,HostListener,Inject,ElementRef,ViewChild} from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile:string
  data:any;
  viewCtrl=false;
  @ViewChild('introduce') introduce:ElementRef;
  ngOnInit() {
    console.log("2");
    setTimeout(()=>{
      this.viewCtrl = true;
    },1000);

  }
constructor() {}

}
