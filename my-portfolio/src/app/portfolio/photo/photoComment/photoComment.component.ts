import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PhotoBrick } from '../photo.model';
import { PhotoService } from '../photo.service'
import { PhotoComment } from '../../../shared/photocomment.model'
import { Subject } from "rxjs/Subject";
import { Response } from '@angular/http';
import { DataService } from '../../../shared/data.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

declare var $;

@Component({
  selector: 'app-photo-comment',
  templateUrl: './photoComment.component.html',
  styleUrls: ['./photoComment.component.css'],
  animations: [
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class PhotoCommentComponent implements OnInit {
  @Input() photo : PhotoBrick;
  commentForm:FormGroup;
  // subscription : Subscription;

  constructor(
              private photoService : PhotoService,
              private dataService : DataService) {}

  ngOnInit() {
    console.log(this.photo);
    this.cForm();
  }

  private cForm(){
    let auth ='';
    let comment ='';
    this.commentForm = new FormGroup({
      auth: new FormControl(auth, Validators.required),
      comment: new FormControl(comment, Validators.required),
    })
  }
  onAddComment(){
    let date= new Date();
    let pushValue = new PhotoComment(
      this.commentForm.controls.auth.value,
      this.commentForm.controls.comment.value,
      date
    )
    this.photo.comment.push(pushValue);
    this.photoService.onUpdate(this.photo.id, this.photo);
    this.photoService.getPhotos()
    this.dataService.updata();
    this.commentForm.reset();
  }
  onClear(){
    this.commentForm.reset();

  }
  deleteComment(i:number){
    let dd =[];
    for(let j = 0; j < this.photo.comment.length; j++){
      if(j != i){
        dd.push(this.photo.comment[j]);
      }
    }
    this.photo.comment = dd;
    this.photoService.onUpdate(this.photo.id, this.photo);
    this.photoService.getPhotos()
    this.dataService.updata();
  }
  commnetCtrl(comment:any, index:number){
    let selecComment = $('.comment').eq(index);
    let showTa = $('.editComment').eq(index);
    let changeValue = showTa[0].value;

    selecComment.toggleClass("hide");
    showTa.toggleClass("hide");
    showTa.toggleClass("pulse");

    if(showTa.hasClass("hide")){
      if(changeValue.length >0){
        comment.comment = changeValue;
        this.photo.comment[index] = comment;
        this.photoService.onUpdate(this.photo.id, this.photo);
        this.photoService.getPhotos()
        this.dataService.updata();
      }
    }else{
      showTa[0].value = comment.comment;
      setTimeout(()=>{
          showTa.focus();
      },100)
      $(showTa).tooltip({trigger:"focus"});
    }
  }

}
