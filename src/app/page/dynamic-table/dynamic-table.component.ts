import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})


export class DynamicTableComponent {

  dogs = []
  settings = {
    columns: {
      name: {
        title: 'Name'
      },
      breed: {
        title: 'Breed'
      },
      age: {
        title: 'Age'
      },
      size: {
        title: 'Size'
      },
      weight: {
        title: 'Weight'
      },
      id: {
        title: 'ID'
      }
    }
  }

}

class Dogs {
  name !: string;
  breed !: string;
  age !: number;
  size !: string;
  weight !: number;
  id !: number;

  constructor(name: string, breed: string, age: number, size: string, weight: number, id: number){
    this.breed = breed;
    this.age = age;
    this.size = size;
    this.weight = weight;
    this.id = id;
  }
}