import * as React from 'react'
import * as moment from 'moment'

import WeatherWidgetHeader from './WeatherWidgetHeader'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'

interface WeatherWidgetProps {
  weatherdata: {
    updated: moment.Moment
    unit: 'C' | 'F'
    forecastdata: {day: string}[]
  }
  dt: string
}

const WeatherWidget = (props: WeatherWidgetProps) => {
  const { weatherdata, dt } = props
  const { unit } = weatherdata
  // const updatedStr = updatedAt.format()

  return (
    <div className='weather-widget'>
      <WeatherWidgetHeader updated={dt}/>
      <CurrentWeather unit={unit} />
      <Forecast {...weatherdata}/>
    </div>
  )
}

export default WeatherWidget