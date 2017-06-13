import { PhotoBrick } from './photo.model';
import { Subject } from 'rxjs/Subject';

export class PhotoService{
  photoListChanged = new Subject<PhotoBrick[]>();
  private photos : PhotoBrick[] = [
    new PhotoBrick(
          'A test recipe',
          'This is simply a test',
          'Yellow Man',
          "https://farm4.staticflickr.com/3052/3052187471_bae8c96df3.jpg",
          new Date()
        ),
        new PhotoBrick(
          'asd','qwer','zxcv',"https://farm1.staticflickr.com/138/333903018_ace85e9762.jpg",new Date()
        ),
        new PhotoBrick(
              'A test recipe',
              'This is simply a test',
              'Yellow Man',
              "https://farm4.staticflickr.com/3052/3052187471_bae8c96df3.jpg",
              new Date()
            ),
            new PhotoBrick(
              'asd','qwer','zxcv',"https://farm1.staticflickr.com/138/333903018_ace85e9762.jpg",new Date()
            ),new PhotoBrick(
              'asd','qwer','zxcv',"https://farm1.staticflickr.com/138/333903018_ace85e9762.jpg",new Date()
            ),
            new PhotoBrick(
                  'A test recipe',
                  'This is simply a test',
                  'Yellow Man',
                  "https://farm4.staticflickr.com/3052/3052187471_bae8c96df3.jpg",
                  new Date()
                )

  ];
  getPhotos(){
    console.log(this.photos)
    return this.photos.slice();
  }
  addBrick(photo : PhotoBrick){
    this.photos.push(photo);
    console.log(this.photos);
    console.log("add Brick");
    this.photoListChanged.next(this.photos);
  }
}
