import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PhotoService } from '../photo.service';
// import { PhotoBrick } from '../photo.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  // photos:PhotoBrick[];
  photoForm: FormGroup;
  editMode =false;
  editId : number;
  comment = [];

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private photoService : PhotoService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.editId = params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        this.initForm()
      }
    )
  }
  private initForm(){
    let title = '';
    let auth = '';
    let imgsrc = '';
    let desc = '';
    console.log(this.photoService);
    if(this.editMode){
      const photo = this.photoService.getPhoto(this.editId);
      title = photo.name;
      auth = photo.auth;
      imgsrc = photo.imgsrc;
      desc = photo.description;
      this.comment = photo.comment;
    }
    this.photoForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'auth': new FormControl(auth, Validators.required),
      'imgsrc': new FormControl(imgsrc, Validators.required),
      'description': new FormControl(desc, Validators.required)
    })
  }
  onSubmit(){
    let photoId = this.photoService.PhotosIds;
    if(!this.editMode){
      photoId = photoId+1;
    }
    let pushValue = {
      name:this.photoForm.value.title,
      description:this.photoForm.value.description,
      auth:this.photoForm.value.auth,
      imgsrc:this.photoForm.value.imgsrc,
      date : new Date(),
      id : photoId,
      comment:this.comment
    };
    if(this.editMode){
      console.log("edit!")
      this.photoService.onUpdate(pushValue.id, pushValue);
    }else{
      this.photoService.addBrick(pushValue);
    }
    this.onCancle()
  }
  onCancle(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
}
