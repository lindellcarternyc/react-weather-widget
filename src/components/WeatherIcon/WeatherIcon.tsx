import * as React from 'react'

import './WeatherIcon.styles.css'

const ICON_NAMES = [
  'cloud', 'cloudy-night', 'cloudy', 'lightning', 'lightning-1',
  'moon', 'rain-1', 'rain-2', 'rain-3', 'rain', 'snow', 'snowflake',
  'snowing-1', 'snowing', 'storm', 'sun', 'thermometer', 'wind-1', 
  'wind', 'windy'
]

const ICONS: {[key: string]: string} = { }
ICON_NAMES.forEach(name => {
  ICONS[name] = require(`./png/${name}.png`)
})

export enum IconSize {
  small =  'small',
  large = 'large'
}

interface Props {
  size: IconSize
  name: string
  description: string
}

const WeatherIcon = (props: Props) => {
  const { size, name } = props
  const icon = ICONS[name]

  const className = size
  return (
    <div className={className}>
      <img src={icon} />
    </div>
  )
}

export default WeatherIcon