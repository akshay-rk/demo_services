import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-rightcont',
  templateUrl: './rightcont.component.html',
  styleUrls: ['./rightcont.component.css']
})
export class RightcontComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // service(){
  //   alert("Innovative : Info");
  // }
  title="CEO";
  onbtnclick(){
    const service= new myservice();
    service.onclickbtn(this.title)
  }
}
