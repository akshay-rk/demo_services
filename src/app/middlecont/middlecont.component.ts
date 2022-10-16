import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service'; 

@Component({
  selector: 'app-middlecont',
  templateUrl: './middlecont.component.html',
  styleUrls: ['./middlecont.component.css']
})
export class MiddlecontComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // service(){
  //   alert("Simplify IoT : Info");
  // }
  title="Akshay";
  onbtnclick(){
  const service= new myservice();
  service.onclickbtn(this.title)
  }
}
