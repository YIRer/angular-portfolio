import { Component, OnInit } from '@angular/core';
import { MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  bricks = [
     {title: 'Brick 1', auth:"Yellow Man", description:"Hello", date:new Date()},
     {title: 'Brick 2', auth:"Yellow Man", description:"Hello", date:new Date()},
     {title: 'Brick 3', auth:"Yellow Man", description:"Hello", date:new Date()},
     {title: 'Brick 4', auth:"Yellow Man", description:"Hello", date:new Date()},
     {title: 'Brick 5', auth:"Yellow Man", description:"Hello", date:new Date()},
     {title: 'Brick 6', auth:"Yellow Man", description:"Hello", date:new Date()}
   ];
  constructor() { }

  ngOnInit() {
  }

}
