import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PhotoBrick } from '../photo.model';
import { PhotoService } from '../photo.service';


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
              private photoService: PhotoService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{

        this.id = params['id']
        if(this.photoService.onCheckId(this.id)){
            this.photo = this.photoService.getPhoto(this.id);
            console.log(this.photo.comment);
        }
      }
    )
  }
  onCancle(){
    this.router.navigate(['portfolio/photo']);
  }
  onDelete(){
    this.photoService.onDelete(this.id);
    this.router.navigate(['portfolio/photo']);
  }
  onEditPhoto(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  deleteComment(i:number){
    let dd =[];
    for(let j = 0; j < this.photo.comment.length; j++){
      if(j != i){
        dd.push(this.photo.comment[j]);
      }
    }
    this.photo.comment = dd;
    console.log(this.photo.comment);
    this.photoService.onUpdate(this.photo.id, this.photo);

  }
}
