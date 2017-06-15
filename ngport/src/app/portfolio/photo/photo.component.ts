import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PhotoBrick } from './photo.model';
import { PhotoService} from './photo.service';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, OnDestroy {

  photos : PhotoBrick[];
  subscription : Subscription;
  constructor(private photoService : PhotoService,
                private router: Router,
                private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.photoService.photoListChanged
    .subscribe((photos:PhotoBrick[])=>{
      console.log(photos)
    })
    this.photos =  this.photoService.getPhotos();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
