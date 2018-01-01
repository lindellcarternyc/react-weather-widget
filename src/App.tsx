import * as React from 'react'
import './App.css'
import './wireframe.css'
import * as moment from 'moment'

import { WeatherWidget } from './components'

import { MOCK_DATA  } from './mocks'

const mockData = MOCK_DATA()

interface AppState {
  updated: moment.Moment
  dt: string
}

class App extends React.Component<{}, AppState> {
  timer: number | null | NodeJS.Timer = null

  state = {
    updated: mockData.updated,
    dt: ''
  }

  componentDidMount() {
    this.timer = setInterval(
      () => {
      // tslint:disable-next-line:no-console
        this.tick()
    },
      1000
    )
  }

  tick = () => {
    const { updated } = this.state
    const now = moment()

    const diff = parseInt(updated.format('s'), 10) - parseInt(now.format('s'), 10)
    const dt = moment.duration(diff, 'seconds').humanize(true)
    this.setState({dt})
  }

  render() {
    const { dt } = this.state
    return (
      <div className='App'>
        <WeatherWidget dt={dt} weatherdata={mockData} />
      </div>
    )
  }
}

export default App
