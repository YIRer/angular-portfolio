import { PhotoComment } from '../../shared/photocomment.model';

export class PhotoBrick {
  public name:string;
  public description:string;
  public auth:string;
  public imgsrc:string
  public date : any;
  public id : any
  public comment : PhotoComment[];
  constructor(name:string, desc:string, auth:string, imgsrc:string, date : any, id:any, comment:PhotoComment[]){
    this.name = name;
    this.description = desc;
    this.auth = auth;
    this.imgsrc = imgsrc;
    this.date = date;
    this.id = id;
    this.comment = comment;
  }
}
