import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})


export class MoviesComponent implements OnInit {

  @Input() title !: string;
  @Input() releaseDate !: string;

  public movieList: Array<Movie> =[
    // {title: 'Jurassic Park', releaseDate: '1993'},
    // {title: 'Avengers', releaseDate: '2012'},
    // {title: 'Jurassic World', releaseDate: '2015'}
  ]

  public filteredArray : Array<Movie> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addMovie(title: string, releaseDate: string){
    let movie = new Movie(title, releaseDate)
    this.movieList.push(movie);
    // for(let i of this.movieList){

    //   if (movie.title == i.title){
    //     i.releaseDate = movie.releaseDate;
    //   }
    // }  

    //this.movieList.push(movie);

    // this.filteredArray = this.movieList.filter(function(el){
    //   return el.title != movie.title
    // });

    let movieMap = new Map<string,string>();
    for (let i of this.movieList){
      movieMap.set(i.releaseDate,i.title)
    }
   

    

    this.clearElements();
  }


   

  clearElements(){
    this.title = ''
    this.releaseDate = ''
  }

  clearList(){
    this.filteredArray = []
    this.movieList = []
    
  }

  displayMovie(movie: Movie){
    this.title = movie.title;
    this.releaseDate = movie.releaseDate;
  }

}

export class Movie {

  title !: string;
  releaseDate !: string;

  constructor(title: string, releaseDate: string){
    this.title = title;
    this.releaseDate = releaseDate;
  }

   
}


