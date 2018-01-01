import * as React from 'react'
import './App.css'
import './wireframe.css'

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

class App extends React.Component {
  render() {
    const days = MOCK_DATA.map(data => {
      return (
        <div key={data.day} className='forecast--day'>
          <p className='forecast--day--name'>{data.day}</p>
          <div className='forecast--day--icon'>I</div>
          <p className='forecast--day--hi-temp'>8&deg;F</p>
          <p className='forecast--day--lo-temp'>8&deg;F</p>
        </div>
      )
    })

    return (
      <div className='App'>
        <div className='weather-widget'>
          <div className='weather-widget__header'>
              <p className='weather-widget__header--icon'>L</p>
              <p className='weather-widget__header--info'>Title</p>
            <button className='weather-widget__header--button'>+</button>
          </div>
          <div className='current-weather'>
            <div className='current-weather--text'>
              <p>8 &deg; F in New York</p>
              <p>Clear</p>
            </div>
            <div className='current-weather__icon--wrapper'>
              Icon
            </div>
          </div>
          <div className='forecast'>
            {days}
          </div>
        </div>
      </div>
    )
  }
}

export default App
