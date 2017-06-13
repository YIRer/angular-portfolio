import { Component, OnInit} from '@angular/core';
import { Subscription} from 'rxjs/Subscription';

import { PhotoBrick } from './photo.model';
import { PhotoService} from './photo.service';

declare var Jquery :any;
declare var $:any;

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers : [PhotoService]
})
export class PhotoComponent implements OnInit {
  photos : PhotoBrick[];
  subscription : Subscription;
  constructor(private photoService : PhotoService) { }

  ngOnInit() {
    this.subscription = this.photoService.photoListChanged
    .subscribe(
      (photos:PhotoBrick[])=>{
        console.log(photos);
        console.log(this.photos);
        this.photos = photos
        console.log(this.photos);
      }
    )
    this.photos = this.photoService.getPhotos()
  }
  addBrick(){
    const newASDF = new PhotoBrick(
      'asd','qwer','zxcv',"https://farm1.staticflickr.com/138/333903018_ace85e9762.jpg",new Date()
    )
    this.photoService.addBrick(newASDF);
  }
}
