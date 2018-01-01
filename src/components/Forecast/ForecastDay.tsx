import * as React from 'react'

import './ForecastDay.styles.css'

interface ForecastDayProps {
  day: string
  unit: 'C' | 'F'
}

const ForecastDay = (props: ForecastDayProps) => {
  const { day, unit } = props
  return (
    <div className='forecast--day'>
      <p className='forecast--day--name'>{day}</p>
      <div className='forecast--day--icon'>I</div>
      <p className='forecast--day--hi-temp'>8&deg;{unit}</p>
      <p className='forecast--day--lo-temp'>8&deg;{unit}</p>
    </div>
  )
}

export default ForecastDay