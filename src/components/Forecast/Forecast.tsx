import * as React from 'react'

import './Forecast.styles.css'

import ForecastDay, { } from './ForecastDay'

interface ForecastProps {
  unit: 'C' | 'F'
  forecastdata: {day: string}[]
}

const Forecast = (props: ForecastProps) => {
  const { unit, forecastdata } = props
  return (
    <div className='forecast'>
      {forecastdata.map(data => {
        return (
          <ForecastDay key={data.day} day={data.day} unit={unit}/>
        )
      })}
    </div>
  )
}

export default Forecast