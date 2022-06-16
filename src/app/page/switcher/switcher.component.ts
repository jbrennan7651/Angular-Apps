import { Component, OnInit } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit {

  switchColor = false;
  public movieList: Array<Movie> =[
    {title: 'Jurassic Park', releaseDate: '1993', director: 'Steven Spielberg'},
    {title: 'Avengers', releaseDate: '2012', director: 'Steven Spielberg'},
    {title: 'Jurassic World', releaseDate: '2015', director: 'Steven Spielberg'}
  ]

  public day = new Date()
  

  constructor() { }

  ngOnInit(): void {
  }

}

export class Movie {

  title !: string;
  releaseDate !: string;
  director !: string;

  constructor(title: string, releaseDate: string, director: string){
    this.title = title;
    this.releaseDate = releaseDate;
    this.director = director;
  }

   
}
