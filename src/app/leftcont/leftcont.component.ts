import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-leftcont',
  templateUrl: './leftcont.component.html',
  styleUrls: ['./leftcont.component.css']
})
export class LeftcontComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Gadgeon";
//  service(){
//    alert("HELLO "+this.title);
//  }
onbtnclick(){
  const service= new myservice();
  service.onclickbtn(this.title)
}
 
}
