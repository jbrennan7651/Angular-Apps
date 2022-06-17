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

  getDailyTemps(){
    let minTemp = this.weatherData.list[0].main.temp_min;
    let maxTemp = this.weatherData.list[0].main.temp_max;
    for (let i = 0; i <  this.weatherData.list.length; i++){
      if ( maxTemp < this.weatherData.list[i].main.temp_max){
        maxTemp = this.weatherData.list[i].main.temp_max
      }
      else if (minTemp >  this.weatherData.list[i].main.temp_min){
        minTemp = this.weatherData.list[i].main.temp_min
      }
    }
  }
  
}
