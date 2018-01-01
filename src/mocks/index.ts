import * as moment from 'moment'

const NOW = moment()

const days: string[] = [
  NOW.format('ddd')
]

for (let i = 1; i <= 4; i++) {
  const nextDay = moment(NOW).add(i, 'days').format('ddd')
  days.push(nextDay)
}

export const MOCK_FORECAST_DATA = () => {
  return days.map(d => {
    return {
      day: d
    }
  })
}

export const MOCK_DATA = () => {
  return {
    updated: NOW,
    unit: 'F' as 'F',
    forecastdata: MOCK_FORECAST_DATA()
  }
}