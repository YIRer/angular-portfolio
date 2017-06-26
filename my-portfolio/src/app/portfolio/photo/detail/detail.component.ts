import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PhotoBrick } from '../photo.model';
import { PhotoService } from '../photo.service';
import { Response } from '@angular/http';
import { DataService } from '../../../shared/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  photo:PhotoBrick;
  id:any;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private photoService: PhotoService,
              private dataService : DataService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{

        this.id = params['id']
        if(this.photoService.onCheckId(this.id)){
            this.photo = this.photoService.getPhoto(this.id);
        }
      }
    )
  }
  onCancle(){
    this.router.navigate(['portfolio/photo']);
  }
  onDelete(){
    this.photoService.onDelete(this.id);
    // this.photos = this.photoService.getPhotos()
    this.dataService.updata();
    this.router.navigate(['portfolio/photo']);
  }
  onEditPhoto(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  updata(){
    this.dataService.storagePhotos()
    .subscribe((response:Response)=>{
    })
  }
}
