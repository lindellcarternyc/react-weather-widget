import * as React from 'react'

import WeatherWidgetHeader from './WeatherWidgetHeader'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'

interface WeatherWidgetProps {
  weatherdata: {
    unit: 'C' | 'F'
    forecastdata: {day: string}[]
  }
}

const WeatherWidget = (props: WeatherWidgetProps) => {
  const { weatherdata } = props
  const { unit } = weatherdata

  return (
    <div className='weather-widget'>
      <WeatherWidgetHeader />
      <CurrentWeather unit={unit} />
      <Forecast {...weatherdata}/>
    </div>
  )
}

export default WeatherWidget