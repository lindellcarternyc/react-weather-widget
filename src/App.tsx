import * as React from 'react'
import './App.css'
import * as moment from 'moment'

import { WeatherWidget } from './components'

import { MOCK_DATA  } from './mocks'

const mockData = MOCK_DATA()

interface AppState {
  updated: moment.Moment
  dt: string
  position?: Position
  city?: string
}

import { Locator } from './locator'

class App extends React.Component<{}, AppState> {
  private locator: Locator

  constructor() {
    super({})

    this.locator = new Locator()

    this.state = {
      updated: mockData.updated,
      dt: ''
    }
  }

  componentDidMount() {
    this.locator.getPosition()
      .then(pos => {
        this.locator.getCityName(pos)
          .then(res => {
            const position = pos
            const city = res as string
            this.setState({
              position,
              city
            })
          })
          .catch()
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
