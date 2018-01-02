export interface ForecastDayData {
  high: number
  low: number
  description: string
}

export interface ForecastDay {
  name: string // Day of the week
  data: ForecastDayData
}

export interface Forecast {
  days: ForecastDay[]
}

export enum Unit {
  C = 'C',
  F = 'F'
}