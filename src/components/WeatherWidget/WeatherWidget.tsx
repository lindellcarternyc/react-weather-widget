import * as React from 'react'

const WeatherWidget = () => {
  return (
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
            {}
          </div>
        </div>
  )
}

export default WeatherWidget