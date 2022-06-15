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

  onClick(filling: string){
    let text = "";

    for (let i = 0; i < filling.length; i++){
      if(i == 0){
        text += filling.charAt(Math.floor(Math.random() * filling.length)).toUpperCase()
      }
      // else if(i == filling.length - 1){
      //   text += '.'
      // }
      else{
        text += filling.charAt(Math.floor(Math.random() * filling.length)).toLowerCase()
      }
    }

    this.filling = text;
  }

  reset(){
    let text = "Click the button below to rearrange these letters"
    this.filling = text;
  }

}
