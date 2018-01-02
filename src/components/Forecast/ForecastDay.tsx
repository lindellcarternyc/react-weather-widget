import * as React from 'react'

import './ForecastDay.styles.css'

import * as weatherService from '../../weather-service'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
interface ForecastDayProps {
  day: string
  unit: 'C' | 'F'
  forecastday: weatherService.ForecastDay
}

const ForecastDay = (props: ForecastDayProps) => {
  const { day, unit, forecastday} = props
  const { high, low } = forecastday 
  return (
    <div className='forecast--day'>
      <p className='forecast--day--name'>{day}</p>
      <WeatherIcon size='small' name='windy'/>
      <p className='forecast--day--hi-temp'>{high.toFixed(0)}&deg;{unit}</p>
      <p className='forecast--day--lo-temp'>{low.toFixed(0)}&deg;{unit}</p>
    </div>
  )
}

export default ForecastDay