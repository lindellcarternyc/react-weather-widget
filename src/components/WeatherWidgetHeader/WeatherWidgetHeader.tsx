import * as React from 'react'

import './WeatherWidgetHeader.styles.css'

interface WeatherWidgetHeaderProps {
  updated: string
  unit: 'C' | 'F'
}

const WeatherWidgetHeader = (props: WeatherWidgetHeaderProps) => {
  const { updated, unit } = props
  return (
    <div className='weather-widget__header'>
        <p className='weather-widget__header--icon'>L</p>
        <p className='weather-widget__header--info'>Weather * Updated {updated}</p>
      <button className='weather-widget__header--button'>{unit}</button>
    </div>
  )
}
export default WeatherWidgetHeader