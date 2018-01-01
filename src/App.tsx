import * as React from 'react'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='weather-widget'>
          <div className='weather-widget__header'>
              <p className='weather-widget__header--icon'>L</p>
              <p className='weather-widget__header--info'>Title</p>
            <button className='weather-widget__header--button'>+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
