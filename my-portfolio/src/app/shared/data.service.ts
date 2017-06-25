import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PhotoService } from '../portfolio/photo/photo.service';
import { PhotoBrick } from '../portfolio/photo/photo.model';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class DataService{
  constructor(private http : Http, private photoService : PhotoService){}
  storagePhotos(){
    return this.http.put('https://portfolio-project-768d9.firebaseio.com/photos.json'
                          , this.photoService.getPhotos());
  }
  getPhotos(){
    setTimeout(()=>{
    this.http.get('https://portfolio-project-768d9.firebaseio.com/photos.json')
            .map(
              (response:Response)=>{
                const photos: PhotoBrick[] = response.json();
                let aa =[];
                if(photos != null){
                  for (let i =0 ;i< photos.length; i++){
                    if(!photos[i].comment){

                      photos[i].comment = [];
                    }
                    let ss = new PhotoBrick(
                      photos[i].name,
                      photos[i].description,
                      photos[i].auth,
                      photos[i].imgsrc,
                      photos[i].date,
                      photos[i].id,
                      photos[i].comment
                    )
                    aa.push(ss);
                  }
                }

                return aa;
              }
            )
          .subscribe((photos:PhotoBrick[])=>{
                this.photoService.setPhotos(photos);

          });
        },1000)
  }
  updata(){
    this.storagePhotos()
    .subscribe((response:Response)=>{
      // console.log(response);
    })
  }
}
