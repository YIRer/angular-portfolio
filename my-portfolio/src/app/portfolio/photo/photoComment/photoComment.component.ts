import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PhotoBrick } from '../photo.model';
import { PhotoService } from '../photo.service'
import { PhotoComment } from '../../../shared/photocomment.model'
import { Subject } from "rxjs/Subject";

declare var $;

@Component({
  selector: 'app-photo-comment',
  templateUrl: './photoComment.component.html',
  styleUrls: ['./photoComment.component.css']
})
export class PhotoCommentComponent implements OnInit {
  @Input() photo : PhotoBrick;
  commentForm:FormGroup;

  constructor(private photoService : PhotoService) { }

  ngOnInit() {
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

  }
  commnetCtrl(comment:any, index:number){
    let selecComment = $('.comment').eq(index);
    let showTa = $('.editComment').eq(index);
    let changeValue = showTa[0].value;

    selecComment.toggleClass("hide");
    showTa.toggleClass("hide");

    if(showTa.hasClass("hide")){
      if(changeValue.length >0){
        comment.comment = changeValue;
        this.photo.comment[index] = comment;
        this.photoService.onUpdate(this.photo.id, this.photo);
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
