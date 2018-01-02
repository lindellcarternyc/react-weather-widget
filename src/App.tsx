import * as React from 'react'
import './App.css'
import * as moment from 'moment'

import { WeatherWidget } from './components'

import { MOCK_DATA  } from './mocks'

const mockData = MOCK_DATA()

import { Locator } from './locator'
import { WeatherService, Forecast, } from './weather-service'

interface AppState {
  updated: moment.Moment
  dt: string
  position?: Position
  city?: string,
  forecast?: Forecast
}

class App extends React.Component<{}, AppState> {
  private locator: Locator
  private weatherService: WeatherService

  constructor() {
    super({})

    this.locator = new Locator()

    this.state = {
      updated: mockData.updated,
      dt: ''
    }
  }

  componentDidMount() {
    this.updateLocation()
      .then(() => {
        const position = this.state.position!
        this.weatherService = new WeatherService(position)
        this.updateForecast()
      })
      .catch()
  }

  updateLocation(): Promise<'success'> {
    return new Promise<'success'>((resolve, reject) => {
      this.locator.getPosition()
      .then(position => {
        this.locator.getCityName(position)
        .then((city) => {
          const updated = moment()
          this.setState(
            {
              updated,
              position,
              city: city as string
            },
            () => resolve('success')
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

  updateForecast = (): Promise<'success'> => {
    return new Promise<'success'>((resolve, reject) => {
      this.weatherService.getForecast()
      .then(forecast => {
        const updated = moment()
        this.setState(
          {
            updated,
            forecast
          },
          () => resolve('success')
      )
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  getWeather() {
    // tslint:disable-next-line:no-console
    this.weatherService.getForecast()
      .then(data => {
        console.dir(data)
      })
      .catch(err => {
        console.warn(err)
      })
  }

  render() {
    const { dt, city } = this.state
    return (
      <div className='App'>
        <WeatherWidget 
          city={city || 'Loading...'}
          dt={dt} 
          weatherdata={mockData} 
        />
      </div>
    )
  }
}

export default App
