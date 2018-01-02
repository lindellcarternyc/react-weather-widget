import * as React from 'react'

import './ForecastDay.styles.css'

import WeatherIcon from '../WeatherIcon/WeatherIcon'

import * as models from '../../models'

interface ForecastDayProps {
  unit: models.Unit
  forecastday: models.ForecastDay
}

const ForecastDay = (props: ForecastDayProps) => {
  const { unit, forecastday} = props
  const { name, data } = forecastday
  const { high, low } = data
  return (
    <div className='forecast--day'>
      <p className='forecast--day--name'>{name}</p>
      <WeatherIcon size='small' name='windy'/>
      <p className='forecast--day--hi-temp'>{high.toFixed(0)}&deg;{unit}</p>
      <p className='forecast--day--lo-temp'>{low.toFixed(0)}&deg;{unit}</p>
    </div>
  )
}

export default ForecastDay