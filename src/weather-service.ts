import axios from 'axios' 

export class WeatherService {
  private position: Position
  private apiKey = '5b7088494172b5ef2b552762142abb61'

  constructor(position: Position) {
    this.position = position
    // tslint:disable-next-line:no-console
    console.log('created weather service')
    console.dir(this.position)
  }

  getWeather() {
    const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${this.apiKey}`
    axios.get(url)
      .then(response => {
        console.dir(response)
      })
      .catch(err => {
        console.warn(err)
      })
  }
}