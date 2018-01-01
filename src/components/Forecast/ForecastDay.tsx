import * as React from 'react'

import './ForecastDay.styles.css'

// const icon = require('../../icons/png/rain-2.png')
import WeatherIcon from '../WeatherIcon/WeatherIcon'
interface ForecastDayProps {
  day: string
  unit: 'C' | 'F'
}

const ForecastDay = (props: ForecastDayProps) => {
  const { day, unit } = props
  return (
    <div className='forecast--day'>
      <p className='forecast--day--name'>{day}</p>
      <WeatherIcon size='small' name='windy'/>
      <p className='forecast--day--hi-temp'>8&deg;{unit}</p>
      <p className='forecast--day--lo-temp'>8&deg;{unit}</p>
    </div>
  )
}

export default ForecastDay