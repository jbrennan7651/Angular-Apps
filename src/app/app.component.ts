import { Component, Input, OnInit } from '@angular/core';
import { Weather, WeatherData } from './model/weather.model';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public day = new Date();
  dailyTemps: any = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
  }

  cityName : string = 'Buffalo'
  weatherData !: WeatherData

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    })
  }

  getDailyTemps(data: any){
    for(let i = 0; i < data.length; i = i + 8){
      this.dailyTemps.push(data[i])
    }
    console.log(this.dailyTemps)
  }

  movies: Array<Object> = [
    {title: 'title',
    director: 'director',
    cast: 'cast',
    releaseDate: 'releaseDate'
    }
  ]
  
}

