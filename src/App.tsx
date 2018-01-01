import * as React from 'react'
import './App.css'
import './wireframe.css'

import {  WeatherWidget } from './components'

// const MOCK_DATA = [
//   {
//     day: 'MON'
//   },
//   {
//     day: 'TUE'
//   },
//   {
//     day: 'WED'
//   },
//   {
//     day: 'THU'
//   },
//   {
//     day: 'FRI'
//   }
// ]

class App extends React.Component {
  render() {
    // const days = MOCK_DATA.map(data => {
    //   return (
    //     <div key={data.day} className='forecast--day'>
    //       <p className='forecast--day--name'>{data.day}</p>
    //       <div className='forecast--day--icon'>I</div>
    //       <p className='forecast--day--hi-temp'>8&deg;F</p>
    //       <p className='forecast--day--lo-temp'>8&deg;F</p>
    //     </div>
    //   )
    // })

    return (
      <div className='App'>
        <WeatherWidget />
        
      </div>
    )
  }
}

export default App
