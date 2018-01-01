import * as React from 'react'

import WeatherIcon from '../WeatherIcon/WeatherIcon'

import './CurrentWeather.styles.css'

interface CurrentWeatherProps {
  unit: 'C' | 'F'
}

const CurrentWeather = (props: CurrentWeatherProps) => {
  const { unit } = props
  return (
    <div className='current-weather'>
      <div className='current-weather--text'>
        <p>8&deg;{unit} in New York</p>
        <p>Clear</p>
      </div>
      <WeatherIcon size='large' name='moon'/>
    </div>
  )
}

export default CurrentWeather