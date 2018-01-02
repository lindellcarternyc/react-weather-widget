import * as React from 'react'

import './Forecast.styles.css'

import ForecastDay from './ForecastDay'

import * as weatherService from '../../weather-service'

interface ForecastProps {
  unit: 'C' | 'F'
  forecastdata: {day: string}[]
  forecast: weatherService.Forecast
}

const Forecast = (props: ForecastProps) => {
  const { unit, forecast, forecastdata } = props
  return (
    <div className='forecast'>
      {forecast.days.map((day, idx) => {
        return (
          <ForecastDay 
            key={idx}
            day={forecastdata[idx].day}
            unit={unit}
            forecastday={day}
          />
        )
      })}
    </div>
  )
}

export default Forecast