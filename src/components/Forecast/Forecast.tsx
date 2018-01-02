import * as React from 'react'

import './Forecast.styles.css'

import ForecastDay from './ForecastDay'

import * as models from '../../models'
interface ForecastProps {
  unit: models.Unit
  forecast: models.Forecast
}

const Forecast = (props: ForecastProps) => {
  const { unit, forecast } = props
  return (
    <div className='forecast'>
      {forecast.days.map((day, idx) => {
        return (
          <ForecastDay 
            key={idx}
            unit={unit}
            forecastday={day}
          />
        )
      })}
    </div>
  )
}

export default Forecast