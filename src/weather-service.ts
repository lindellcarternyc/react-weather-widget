import axios from 'axios'

import API_KEY from './constants'

import { ForecastDayData }  from './models'

export class WeatherService {
  private position: Position
  // Your key here
  private apiKey = API_KEY.OPEN_WEATHER

  constructor(position: Position) {
    this.position = position
    // tslint:disable-next-line:no-console
    console.log('created weather service')
    console.dir(this.position)
  }

  getForecast(): Promise<ForecastDayData[]> {
    const { coords } = this.position
    const { latitude, longitude } = coords
    const positionParam = `lat=${latitude}&lon=${longitude}`
    // tslint:disable-next-line:max-line-length
    const url = `http://api.openweathermap.org/data/2.5/forecast/daily?${positionParam}&units=imperial&cnt=5&APPID=${this.apiKey}`
    return new Promise<ForecastDayData[]>((resolve, reject) => {
      axios.get(url)
      .then(response => {
        const data = response.data.list
        const days: ForecastDayData[] = data.map(
          (item: {temp: {min: number, max: number}, weather: {main: string}[]}
        ) => {
          const { temp, weather } = item
          return {
            high: temp.max,
            low: temp.min,
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