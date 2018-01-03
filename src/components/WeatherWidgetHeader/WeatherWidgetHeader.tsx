import * as React from 'react'

import './WeatherWidgetHeader.styles.css'

import { Unit } from '../../models'

interface WeatherWidgetHeaderProps {
  elapsed: string
  unit: Unit
  toggleUnit: () => void
}

const WeatherWidgetHeader = (props: WeatherWidgetHeaderProps) => {
  const { unit, toggleUnit, elapsed } = props
  return (
    <div className='weather-widget__header'>
        <p className='weather-widget__header--icon'>L</p>
        <p className='weather-widget__header--info'>Weather * Updated {elapsed}</p>
      <button 
        className='weather-widget__header--button'
        onClick={toggleUnit}
      >
        {unit}
      </button>
    </div>
  )
}
export default WeatherWidgetHeader