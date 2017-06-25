import { Component, OnInit, Input } from '@angular/core';
import { PhotoBrick } from '../photo.model';
import { Subject } from 'rxjs/Subject';
import { PhotoService } from '../photo.service';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-photoItem',
  templateUrl: './photoItem.component.html',
  styleUrls: ['./photoItem.component.css']
})
export class PhotoItemComponent implements OnInit {
  @Input() photo:any;
  @Input() index:number;
  @Input() photoId:any;
  constructor(private photoService: PhotoService){}
  ngOnInit() {}
  imageLoad(){
    this.photoService.itemLoaded.next(true);
    setTimeout(()=>{
      $('.card').eq(this.index).addClass("animated fadeIn");
    },500);
  }

}
