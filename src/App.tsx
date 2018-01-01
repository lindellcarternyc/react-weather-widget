import * as React from 'react'
import './App.css'
import './wireframe.css'

import {  WeatherWidget } from './components'

const MOCK_DATA = [
  {
    day: 'MON'
  },
  {
    day: 'TUE'
  },
  {
    day: 'WED'
  },
  {
    day: 'THU'
  },
  {
    day: 'FRI'
  }
]

const MOCK_WEATHER_DATA = {
  forecastdata: MOCK_DATA
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
