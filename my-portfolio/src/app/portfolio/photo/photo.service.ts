import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

import { PhotoComment } from './photoComment/photocomment.model'
import { PhotoBrick } from './photo.model';

@Injectable()
export class PhotoService{
  itemLoaded =  new Subject<boolean>();
  photoListChanged = new Subject<PhotoBrick[]>();
  private photos : PhotoBrick[] = [
    // new PhotoBrick(
    //       'A test recipe',
    //       'This is simply a test',
    //       'Yellow Man',
    //       "https://farm3.staticflickr.com/2703/4211984650_a0d58d5496.jpg",
    //       new Date(),
    //       '1',
    //       []
    //     ),
    //     new PhotoBrick(
    //       'asd',
    //       'qwer',
    //       'zxcv',
    //       "https://farm6.staticflickr.com/5055/5398254250_0a691d9804.jpg",
    //       new Date(),
    //       '2',
    //       [
    //         new PhotoComment('qwer','asdsa', new Date())
    //       ]
    //     ),
    //     new PhotoBrick(
    //       'asd',
    //       'qwer',
    //       'zxcv',
    //       "https://farm1.staticflickr.com/139/357015070_0f007ee28f.jpg",
    //       new Date(),
    //       '3',
    //       []
    //     ),
    //     new PhotoBrick(
    //           'A test recipe',
    //           'This is simply a test',
    //           'Yellow Man',
    //           "https://farm8.staticflickr.com/7596/17094319752_7de98d3e50.jpg",
    //           new Date(),
    //           '4',
    //           []
    //         )
  ];
  public PhotosIds = this.photos.length;

  setPhotos(photos:PhotoBrick[]){
    this.photos = photos;
    this.PhotosIds = this.photos.length;
    this.photoListChanged.next(this.photos);
  }

  getPhotos(){
    this.PhotosIds = this.photos.length;
    return this.photos;
  }
  addBrick(photo:PhotoBrick){
    if(this.photos.length > 0){
      this.photos.unshift(photo);
    }else{
      this.photos.push(photo);
    }
    this.PhotosIds++;
    this.photoListChanged.next(this.photos.slice());
  }
  getPhoto(index:any){
    for(let i = 0 ; i < this.photos.length; i++){
      if(this.photos[i].id == index){
        return this.photos[i];
      }
    }
  }
  onDelete(index:any){
    for(let i = 0 ; i < this.photos.length; i++){
      if(this.photos[i].id == index){
        this.photos.splice(i,1);
        this.photoListChanged.next(this.photos.slice());
      }
    }
  }
  onCheckId(id:any){
    for(let i = 0 ; i < this.photos.length; i++){
      if(this.photos[i].id == id){
        return true;
      }
    }
    return false;
  }
  onUpdate(id:any, editPhoto:PhotoBrick){
    for(let i = 0 ; i < this.photos.length; i++){
      if(this.photos[i].id == id){
        this.photos[i] = editPhoto;
        this.photoListChanged.next(this.photos.slice());
      }
    }
  }
}
