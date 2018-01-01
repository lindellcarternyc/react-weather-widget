import * as React from 'react'

const WeatherWidgetHeader = () => {
  return (
    <div className='weather-widget__header'>
        <p className='weather-widget__header--icon'>L</p>
        <p className='weather-widget__header--info'>Weather * Updated 5 minutes ago</p>
      <button className='weather-widget__header--button'>+</button>
    </div>
  )
}

export default WeatherWidgetHeader