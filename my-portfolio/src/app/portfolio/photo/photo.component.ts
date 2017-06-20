import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PhotoBrick } from './photo.model';
import { PhotoService} from './photo.service';
import { Subscription} from 'rxjs/Subscription';
import { Response } from '@angular/http';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, OnDestroy {

  photos : any;
  checkLength : number = 0;
  subscription : Subscription;
  loading = false;
  showImage :any;
  constructor(private photoService : PhotoService,
                private router: Router,
                private route: ActivatedRoute,
                private dataService : DataService) { }

  ngOnInit() {
    this.subscription = this.photoService.photoListChanged
    .subscribe((photos:PhotoBrick[])=>{
        this.photos = photos;
        this.checkLength = this.photos.length;
        this.loading = true;
        this.showImage = this.onLoading()
    })
      setTimeout(()=>{
        this.dataService.getPhotos();
        this.photos = this.photoService.getPhotos()
        this.checkLength = this.photos.length;
      },500)
    }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  onLoading(){
    if(this.loading === true){
      if(this.checkLength == 0){
        return true;
      }else{
        return false;
      }
    }
  }
}
