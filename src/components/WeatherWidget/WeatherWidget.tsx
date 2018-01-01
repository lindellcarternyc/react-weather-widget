import * as React from 'react'

import WeatherWidgetHeader from './WeatherWidgetHeader'

interface WeatherWidgetProps {
  weatherdata: {
    unit: 'C' | 'F'
    forecastdata: {day: string}[]
  }
}

const WeatherWidget = (props: WeatherWidgetProps) => {
  const { weatherdata } = props
  const { forecastdata, unit } = weatherdata
  const days = forecastdata.map(data => {
    return (
      <div key={data.day} className='forecast--day'>
        <p className='forecast--day--name'>{data.day}</p>
        <div className='forecast--day--icon'>I</div>
        <p className='forecast--day--hi-temp'>8&deg;{unit}</p>
        <p className='forecast--day--lo-temp'>8&deg;{unit}</p>
      </div>
    )
  })

  return (
    <div className='weather-widget'>
          <WeatherWidgetHeader />
          
          <div className='forecast'>
            {days}
          </div>
        </div>
  )
}

export default WeatherWidget