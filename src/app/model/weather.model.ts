export interface WeatherData {
  cod: string
  message: number
  cnt: number
  list: [List, List2]
  city: City
}

export interface List {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  sys: Sys
  dt_txt: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Clouds {
  all: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Sys {
  pod: string
}

export interface List2 {
  dt: number
  main: Main2
  weather: Weather2[]
  clouds: Clouds2
  wind: Wind2
  visibility: number
  pop: number
  sys: Sys2
  dt_txt: string
}

export interface Main2 {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface Weather2 {
  id: number
  main: string
  description: string
  icon: string
}

export interface Clouds2 {
  all: number
}

export interface Wind2 {
  speed: number
  deg: number
  gust: number
}

export interface Sys2 {
  pod: string
}

export interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface Coord {
  lat: number
  lon: number
}
