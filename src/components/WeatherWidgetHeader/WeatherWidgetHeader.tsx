import * as React from 'react'

import './WeatherWidgetHeader.styles.css'

import * as moment from 'moment'
import { Unit } from '../../models'

interface WeatherWidgetHeaderProps {
  updated: moment.Moment
  unit: Unit
  toggleUnit: () => void
}

interface HeaderState {
  now: moment.Moment
}

class WeatherWidgetHeader extends React.Component<WeatherWidgetHeaderProps, HeaderState> {
  state = {
    now: moment()
  }

  timer?: number

  componentDidMount() {
    this.timer = window.setInterval(
      this.tick,
      1000
    )
  }

  tick = () => {
    const now = moment()
    this.setState({now})
  }

  render() {
    const { updated, unit, toggleUnit } = this.props
    const { now } = this.state
    const elapsed = updated.from(now)
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
}
export default WeatherWidgetHeader