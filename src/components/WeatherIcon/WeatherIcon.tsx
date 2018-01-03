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
  description: string
}

const getIconNameForDescription = (descripion: string): string => {
  const des = descripion.toLowerCase()
  if (des.match(/snow/)) {
    return 'snowflake'
  } else if (des.match(/rain/)) {
    return 'rain'
  } else if (des.match(/cloud/)) {
    return 'cloud'
  } else if (des.match(/storm/)) {
    return 'storm'
  } else if (des.match(/wind/)) {
    return 'wind'
  } else {
    return 'sun'
  }
}

const WeatherIcon = (props: Props) => {
  const { size, description } = props
  const name = getIconNameForDescription(description)

  const icon = ICONS[name]

  const className = size
  return (
    <div className={className}>
      <img src={icon} />
    </div>
  )
}

export default WeatherIcon