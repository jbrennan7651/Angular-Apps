import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "Home Page: One-way Binding"
  filling = "Click the button below to rearrange these letters"

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    let text = "";

    for (let i = 0; i < this.filling.length; i++){
      if(i == 0){
        text += this.filling.charAt(Math.floor(Math.random() * this.filling.length)).toUpperCase()
      }
      // else if(i == filling.length - 1){
      //   text += '.'
      // }
      else{
        text += this.filling.charAt(Math.floor(Math.random() * this.filling.length)).toLowerCase()
      }
    }

    this.filling = text;
  }

  reset(){
    let text = "Click the button below to rearrange these letters"
    this.filling = text;
  }

}
