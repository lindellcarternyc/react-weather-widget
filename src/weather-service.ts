import axios from 'axios'

import API_KEY from './constants'

import { ForecastDayData, Unit, Temperature, CurrentWeatherData }  from './models'

export class WeatherService {
  private position: Position
  // Your key here
  private apiKey = API_KEY.OPEN_WEATHER

  constructor(position: Position) {
    this.position = position
  }

  positionParam = (): string => {
    const { latitude , longitude } = this.position.coords
    return `lat=${latitude}&lon=${longitude}`
  }

  getCurrentWeather = (): Promise<CurrentWeatherData> => {
    return new Promise<CurrentWeatherData>((resolve, reject) => {
      const positionParam = this.positionParam()
      const urlBase = 'http://api.openweathermap.org/data/2.5/weather?'
      const url = urlBase + `${positionParam}&units=imperial&APPID=${this.apiKey}`
      
      axios.get(url)
        .then(response => {
          console.dir(response)
          const data = response.data
          const { main } = data
          const temp = new Temperature(main.temp, Unit.F)
          resolve({temp})
        })
        .catch(err =>
          reject(err)
        )
    })
  }

  getForecast(): Promise<ForecastDayData[]> {
    const positionParam = this.positionParam()
    const urlBase = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
    const url =  urlBase + `${positionParam}&units=imperial&cnt=5&APPID=${this.apiKey}`
    
    return new Promise<ForecastDayData[]>((resolve, reject) => {
      axios.get(url)
      .then(response => {
        const data = response.data.list
        const days: ForecastDayData[] = data.map(
          (item: {temp: {min: number, max: number}, weather: {main: string}[]}
        ) => {
          const { temp, weather } = item
          const high = new Temperature(temp.max, Unit.F)
          const low = new Temperature(temp.min, Unit.F)
          return {
            high,
            low,
            description: weather[0].main
          }
        })
        resolve(days)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
}