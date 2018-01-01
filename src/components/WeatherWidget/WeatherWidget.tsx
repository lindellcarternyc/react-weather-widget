import * as React from 'react'

interface WeatherWidgetProps {
  weatherdata: {
    forecastdata: {day: string}[]
  }
}

const WeatherWidget = (props: WeatherWidgetProps) => {
  const { weatherdata } = props
  const { forecastdata } = weatherdata
  const days = forecastdata.map(data => {
    return (
      <div key={data.day} className='forecast--day'>
        <p className='forecast--day--name'>{data.day}</p>
        <div className='forecast--day--icon'>I</div>
        <p className='forecast--day--hi-temp'>8&deg;F</p>
        <p className='forecast--day--lo-temp'>8&deg;F</p>
      </div>
    )
  })

  return (
    <div className='weather-widget'>
          <div className='weather-widget__header'>
              <p className='weather-widget__header--icon'>L</p>
              <p className='weather-widget__header--info'>Title</p>
            <button className='weather-widget__header--button'>+</button>
          </div>
          <div className='current-weather'>
            <div className='current-weather--text'>
              <p>8 &deg; F in New York</p>
              <p>Clear</p>
            </div>
            <div className='current-weather__icon--wrapper'>
              Icon
            </div>
          </div>
          <div className='forecast'>
            {days}
          </div>
        </div>
  )
}

export default WeatherWidget