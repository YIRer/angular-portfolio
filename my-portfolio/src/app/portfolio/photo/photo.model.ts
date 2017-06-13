export class PhotoBrick {
  public name:string;
  public description:string;
  public auth:string;
  public imgsrc:string
  public date : any;
  constructor(name:string, desc:string, auth:string, imgsrc:string, date : any){
    this.name = name;
    this.description = desc;
    this.auth = auth;
    this.imgsrc = imgsrc;
    this.date = date;
  }
}
