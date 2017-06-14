import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  photoForm: FormGroup;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private photoService : PhotoService) { }

  ngOnInit() {
    let title = '';
    let auth = '';
    let imgsrc = '';
    let desc = '';
    console.log(this.photoService);
    this.photoForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'auth': new FormControl(auth, Validators.required),
      'imgsrc': new FormControl(imgsrc, Validators.required),
      'description': new FormControl(desc, Validators.required)
    })
  }
  onSubmit(){
    let pushValue = {
      name:this.photoForm.value.title,
      description:this.photoForm.value.description,
      auth:this.photoForm.value.auth,
      imgsrc:this.photoForm.value.imgsrc,
      date : new Date()
    };
    this.photoService.addBrick(pushValue);
    this.onCancle()
  }
  onCancle(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
}
