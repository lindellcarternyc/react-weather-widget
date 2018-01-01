import * as React from 'react'
import './App.css'
import './wireframe.css'

import { WeatherWidget } from './components'

import { MOCK_DATA } from './mocks'

const mockData = MOCK_DATA()

const MOCK_WEATHER_DATA = {
  unit: 'F' as 'F',
  forecastdata: mockData
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <WeatherWidget weatherdata={MOCK_WEATHER_DATA} />
      </div>
    )
  }
}

export default App
