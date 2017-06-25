import { Component, OnInit} from '@angular/core';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let addTooltip = $('address').length;
    for(let i = 0 ; i < addTooltip; i++){
      $('address').eq(i).tooltip({trigger:'hover'});
    }
  }
  clickText(value){
    let innerText = value;
    $('#clip_target').val(innerText);
    $('#clip_target').select();
    try {
      let successful = document.execCommand('copy');
    }
    catch (err) {
    }
  }
}
