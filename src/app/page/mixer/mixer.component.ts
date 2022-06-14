import { Component, Input, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-mixer',
  templateUrl: './mixer.component.html',
  styleUrls: ['./mixer.component.scss']
})
export class MixerComponent implements OnInit {

  @Input() name: string = '';

  
  constructor() {}

  ngOnInit(): void {
  }

  onClick(filling: string){
    let text = "";

    for (let i = 0; i < filling.length; i++){
      if(i == 0){
        text += filling.charAt(Math.floor(Math.random() * filling.length)).toUpperCase()
      }
      else if(i == filling.length - 1){
        text += '.'
      }
      else{
        text += filling.charAt(Math.floor(Math.random() * filling.length)).toLowerCase()
      }
    }

    this.name = text;
  }

  

}
