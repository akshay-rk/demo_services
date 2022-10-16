import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipe',
  templateUrl: './demopipe.component.html',
  styleUrls: ['./demopipe.component.css']
})
export class DemopipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Super Man";
  today=Date.now();//today=Date(); also can be used
  user={
    id:100,
    name:"Akshay",
    DOB:'10-10-2020',
    Salary:350000
  }
}
