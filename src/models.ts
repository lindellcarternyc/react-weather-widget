export interface ForecastDayData {
  high: Temperature
  low: Temperature
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

export const toggleUnit = (unit: Unit): Unit => {
  if (unit === Unit.C) {
    return Unit.F
  } else {
    return Unit.C
  }
}

export class Temperature {
  unit: Unit
  private temp: number

  static toggleUnit(t: Temperature): void {
    const temp = t.unit === Unit.C ?
      Temperature.CtoF(t.temp) :
      Temperature.FtoC(t.temp)
    const unit = toggleUnit(t.unit)
    t.temp = temp
    t.unit = unit
  }

  private static FtoC = (F: number): number => {
    return (F - 32.0) * (5.0 / 9.0)
  }
  private static CtoF = (C: number): number => {
    return (C * 9.0 / 5.0) + 32.0
  }

  constructor(temp: number, unit: Unit) {
    this.unit = unit
    this.temp = temp
  }

  toFixed(digits: number = 0): string {
    return this.temp.toFixed(digits)
  }

  toggleUnit() {
    Temperature.toggleUnit(this)
  }
}

export interface CurrentWeatherData {
  temp: Temperature
  description: string
}

export interface Coordinates {
  latitude: number
  longitude: number
}