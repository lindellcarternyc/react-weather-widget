import * as React from 'react'

interface CurrentWeatherProps {
  unit: 'C' | 'F'
}

const CurrentWeather = (props: CurrentWeatherProps) => {
  const { unit } = props
  return (
    <div className='current-weather'>
      <div className='current-weather--text'>
        <p>8&deg;{unit} in New York</p>
        <p>Clear</p>
      </div>
      <div className='current-weather__icon--wrapper'>
        Icon
      </div>
    </div>
  )
}

export default CurrentWeather