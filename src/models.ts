export interface ForecastDay {
  name: string // Day of the week
  high: number // High temp
  low: number // Low temp
  conditions: string // Used to get icon name
}

export interface Forecast {
  days: ForecastDay[]
}