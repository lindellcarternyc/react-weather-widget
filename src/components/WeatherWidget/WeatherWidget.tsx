import * as React from 'react'

import WeatherWidgetHeader from '../WeatherWidgetHeader/WeatherWidgetHeader'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import Forecast from '../Forecast/Forecast'

import * as models from '../../models'

import * as moment from 'moment'

import './WeatherWidget.styles.css'

interface WeatherWidgetProps {
  updated: moment.Moment
  city: string
  unit: models.Unit
  forecast?: models.Forecast
}

const WeatherWidget = (props: WeatherWidgetProps) => {
  const { updated, city, forecast, unit } = props

  return (
    <div className='weather-widget'>
      <WeatherWidgetHeader updated={updated} unit={unit}/>
      <CurrentWeather unit={unit} city={city} />
      {forecast && 
        <Forecast unit={unit} forecast={forecast} />
      }
    </div>
  )
}

export default WeatherWidget