import * as React from 'react'
import * as moment from 'moment'

import WeatherWidgetHeader from '../WeatherWidgetHeader/WeatherWidgetHeader'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import Forecast from '../Forecast/Forecast'

import './WeatherWidget.styles.css'

interface WeatherWidgetProps {
  weatherdata: {
    updated: moment.Moment
    unit: 'C' | 'F'
    forecastdata: {day: string}[]
  }
  dt: string
  city: string
}

const WeatherWidget = (props: WeatherWidgetProps) => {
  const { weatherdata, dt, city } = props
  const { unit } = weatherdata
  // const updatedStr = updatedAt.format()

  return (
    <div className='weather-widget'>
      <WeatherWidgetHeader updated={dt} unit={unit}/>
      <CurrentWeather unit={unit} city={city} />
      <Forecast {...weatherdata}/>
    </div>
  )
}

export default WeatherWidget