import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PhotoBrick } from '../photo.model';
import { PhotoService } from '../photo.service'
import { PhotoComment } from '../../../shared/photocomment.model'

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
    this.cForm()
    console.log(this.photo);
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
    this.photoService.onUpdate(this.photo.id, this.photo)
    this.commentForm.reset();
  }
  onClear(){
    this.commentForm.reset();

  }
}
