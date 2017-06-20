import { Component, OnInit, Input } from '@angular/core';
import { PhotoBrick } from '../photo.model';

@Component({
  selector: 'app-photoItem',
  templateUrl: './photoItem.component.html',
  styleUrls: ['./photoItem.component.css']
})
export class PhotoItemComponent implements OnInit {
  @Input() photo:any;
  @Input() index:number;
  @Input() photoId:any;

  ngOnInit() {}

}
