import * as React from 'react'

import WeatherIcon, { IconSize } from '../WeatherIcon/WeatherIcon'

import './CurrentWeather.styles.css'

import { Unit } from '../../models'

interface CurrentWeatherProps {
  unit: Unit
  city: string
}

const CurrentWeather = (props: CurrentWeatherProps) => {
  const { unit, city } = props
  return (
    <div className='current-weather'>
      <div className='current-weather--text'>
        <p>8&deg;{unit} in {city}</p>
        <p>Clear</p>
      </div>
      <WeatherIcon size={IconSize.large} name='moon'/>
    </div>
  )
}

export default CurrentWeather