import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemNumber: number = 4;
  btnName: string = 'Add item';
  goalText: string = 'My first goal';
  goals=[];

  constructor() { }

  ngOnInit() {
    this.itemNumber = this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText='';
    this.itemNumber = this.goals.length;
  }


}
