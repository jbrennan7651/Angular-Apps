import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})


export class MoviesComponent implements OnInit {


  @Input() title !: string;
  @Input() releaseDate !: string;
  @Input() director !: string;
  @Input() ngSwitch !: any;

  public movieList: Array<Movie> =[
    {title: 'Jurassic Park', releaseDate: '1993', director: 'Steven Spielberg'},
    {title: 'Avengers', releaseDate: '2012', director: 'Steven Spielberg'},
    {title: 'Jurassic World', releaseDate: '2015', director: 'Steven Spielberg'}
  ]

  public filteredArray : Array<Movie> = [];

  constructor() { }

  ngOnInit(): void {
  }


  addMovie(title: string, releaseDate: string, director: string){
    let movie = new Movie(title, releaseDate, director)
    this.movieList.push(movie);
    this.updateList(title, releaseDate, director)
    this.clearElements();
  }

  updateList(title: string, releaseDate: string, director: string){
    let movie = new Movie(title, releaseDate, director)
    this.movieList.push(movie);
    for(let i of this.movieList){
      if (movie.title == i.title){
        i.releaseDate = movie.releaseDate;
        i.director = movie.director;
        this.movieList.pop()
        this.clearElements();
      }
      
    }  
    
  }

  clearElements(){
    this.title = ''
    this.releaseDate = ''
    this.director = ''
  }

  clearList(){
    this.filteredArray = []
    this.movieList = []
    
  }

  displayMovie(movie: Movie){
    this.title = movie.title;
    this.releaseDate = movie.releaseDate;
    this.director = movie.director;
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


