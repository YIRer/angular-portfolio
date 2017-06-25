import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PhotoBrick } from './photo.model';
import { PhotoService} from './photo.service';
import { Subscription} from 'rxjs/Subscription';
import { Response } from '@angular/http';
import { DataService } from '../../shared/data.service';
import {Observable} from 'rxjs/Observable';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, OnDestroy {

  photos : any;
  checkLength : number = 0;
  subscription : Subscription;
  imageLoaded :Subscription;
  imageCheck  = 0;
  constructor(private photoService : PhotoService,
                private router: Router,
                private route: ActivatedRoute,
                private dataService : DataService) { }

  ngOnInit() {
    this.subscription = this.photoService.photoListChanged
    .subscribe((photos:PhotoBrick[])=>{
          this.photos = photos;
          this.checkLength = this.photos.length;
  })
    this.imageLoaded =  this.photoService.itemLoaded
    .subscribe((value:boolean)=>{
      if(value === true){
        this.imageCheck++

        if(this.imageCheck === this.photos.length){
            console.log("complate!");
            setTimeout(()=>{
              $('#loading').addClass("hide");
              $('#gallery-box').removeClass("hide");
            },500)
        }
      }
    })
    this.dataService.getPhotos();
    this.photos = this.photoService.getPhotos()
    this.checkLength = this.photos.length;
    }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.imageLoaded.unsubscribe();
  }

}
