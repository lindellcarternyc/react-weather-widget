import * as React from 'react'
import './App.css'
import * as moment from 'moment'

import { WeatherWidget } from './components'

import { Locator } from './locator'
import { WeatherService } from './weather-service'
import { 
  CurrentWeatherData, Forecast, ForecastDay, Unit, toggleUnit,
  Coordinates
} from './models'

interface AppState {
  updated: moment.Moment
  now: moment.Moment
  coordinates?: Coordinates
  city?: string,
  forecast?: Forecast
  unit: Unit
  currentWeather?: CurrentWeatherData
}

class App extends React.Component<{}, AppState> {
  private locator: Locator
  private weatherService: WeatherService
  private _tick?: number

  constructor() {
    super({})

    this.locator = new Locator()

    this.state = {
      updated: moment(),
      now: moment(),
      unit: Unit.F
    }
  }

  tick = () => {
    const now = moment()
    this.setState({now})
  }

  componentDidMount() {
    this.updateLocation()
      .then(() => {
        const coordinates = this.state.coordinates!
        this.weatherService = new WeatherService(coordinates)
        this.updateCurrentWeather()
        this.updateForecast()

        this._tick = window.setInterval(
          this.tick,
          2500
        )
      })
      .catch()
  }

  elapsed(): string {
    const { updated, now } = this.state
    const elapsedTime = updated.from(now)
    return elapsedTime
  }

  updateLocation(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.locator.getPosition()
      .then(coordinates => {
        this.locator.getCityName(coordinates)
        .then((city) => {
          const updated = moment()
          this.setState(
            {
              updated,
              coordinates,
              city: city as string
            },
            () => resolve()
        )
        })
        .catch(err => {
          reject(err)
        })
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  updateForecast = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      this.weatherService.getForecast()
      .then(forecastDayDataList => {
        const updated = moment()
        const days: ForecastDay[] = forecastDayDataList.map((data, idx) => {
          let name: string = ''
          if (idx === 0 ) {
            name = updated.format('ddd')
          } else {
            name = moment(updated).add(idx, 'days').format('ddd')
          }
          return {
            name,
            data
          }
        })
        const forecast: Forecast = {
          days
        }
        this.setState(
          {
            updated,
            forecast
          },
          () => resolve()
      )
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  updateCurrentWeather = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      this.weatherService.getCurrentWeather()
        .then(data => {
          this.setState({currentWeather: data})
        })
        .catch(err => {
          throw err
        })
    })
  }

  toggleUnit = () => {
    const { unit, forecast, currentWeather } = this.state

    if (forecast !== undefined && currentWeather !== undefined) {
      const days = forecast.days
      days.forEach(day => {
        const data = day.data
        data.high.toggleUnit()
        data.low.toggleUnit()

        day.data = data
      })
      currentWeather.temp.toggleUnit()
      this.setState({unit: toggleUnit(unit), forecast, currentWeather})
    } else {
      return
    }
  }

  render() {
    const { updated, city, forecast, unit, currentWeather } = this.state
    return (
      <div className='App'>
        <WeatherWidget 
          city={city || 'Loading...'}
          updated={updated}
          elapsed={this.elapsed()}
          unit={unit}
          forecast={forecast}
          currentWeather={currentWeather}
          toggleUnit={this.toggleUnit}
        />
      </div>
    )
  }

  componentWillUnmount() {
    if (this._tick) {
      window.clearInterval(this._tick)
    }
  }
}

export default App
