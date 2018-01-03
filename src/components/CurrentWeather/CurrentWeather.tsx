import * as React from 'react'

import WeatherIcon, { IconSize } from '../WeatherIcon/WeatherIcon'

import './CurrentWeather.styles.css'

import { Unit, CurrentWeatherData, Temperature } from '../../models'

interface CurrentWeatherProps {
  unit: Unit
  city: string
  data?: CurrentWeatherData
}

const CurrentWeather = (props: CurrentWeatherProps) => {
  const { unit, city, data } = props

  let temperature: Temperature | null
  if (data !== undefined) {
    temperature = data.temp
  } else {
    temperature = null
  }

  return (
    <div className='current-weather'>
      <div className='current-weather--text'>
        <p>{temperature && temperature.toFixed()}&deg;{unit} in {city}</p>
        <p>Clear</p>
      </div>
      <WeatherIcon size={IconSize.large} description=''/>
    </div>
  )
}

export default CurrentWeather