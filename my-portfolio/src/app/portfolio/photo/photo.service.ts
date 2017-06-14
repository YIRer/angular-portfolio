import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { PhotoBrick } from './photo.model';

@Injectable()
export class PhotoService{
  photoListChanged = new Subject<PhotoBrick[]>();
  private photos : PhotoBrick[] = [
    new PhotoBrick(
          'A test recipe',
          'This is simply a test',
          'Yellow Man',
          "https://farm3.staticflickr.com/2703/4211984650_a0d58d5496.jpg",
          new Date()
        ),
        new PhotoBrick(
          'asd','qwer','zxcv',"https://farm6.staticflickr.com/5055/5398254250_0a691d9804.jpg",new Date()
        ),
        new PhotoBrick(
          'asd','qwer','zxcv',"https://farm1.staticflickr.com/139/357015070_0f007ee28f.jpg",new Date()
        ),
        new PhotoBrick(
              'A test recipe',
              'This is simply a test',
              'Yellow Man',
              "https://farm8.staticflickr.com/7596/17094319752_7de98d3e50.jpg",
              new Date()
            )
  ];
  setPhotos(photos:PhotoBrick[]){
    this.photos = photos;
    this.photoListChanged.next(this.photos.slice());
  }
  getPhotos(){
    console.log(this.photos)
    return this.photos.slice();
  }
  addBrick(photo:PhotoBrick){
    this.photos.push(photo);
    console.log(this.photos);
    this.photoListChanged.next(this.photos.slice());
  }
  // reverseFn(photos : PhotoBrick[]){
  //   this.photos = photos.reverse();
  //   console.log(this.photos);
  //   this.photoListChanged.next(this.photos);
  // }
}
