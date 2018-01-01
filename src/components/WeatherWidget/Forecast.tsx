import * as React from 'react'

interface ForecastProps {
  unit: 'C' | 'F'
  forecastdata: {day: string}[]
}

const Forecast = (props: ForecastProps) => {
  const { unit, forecastdata } = props
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
    <div className='forecast'>
      {days}
    </div>
  )
}

export default Forecast