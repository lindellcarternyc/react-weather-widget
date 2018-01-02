const createClient = require('@google/maps').createClient

interface ClientResponse {
  json: {
    results: {
      address_components: {
        long_name: string,
        short_name: string,
        types: string[]
      }[]
    }[]
  }
}

interface Client {
  reverseGeocode: (
    query: {latlng: string}, 
    callback: (err: Error, response: ClientResponse) => void
  ) => void
}

import API_KEY from './constants'

export class Locator {
  private client: Client
  constructor() {
    // tslint:disable-next-line:no-unused-expression
    // tslint:disable-next-line:no-console
    console.log('created new locator...')
    this.client = createClient({
      // 'Your key here'
      key: API_KEY.GOOGLE_MAPS
    })
    // client.reverseGeocode()
  }

  getPosition(): Promise<Position> {
    return new Promise<Position>((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position => {
            resolve(position)
          }),
          (err => {
            reject(err)
          })
        )
      } else {
        reject('No geolocation')
      }
    })
  }

  getCityName(position: Position): Promise<String> {
    const { coords } = position
    const { latitude, longitude } = coords
    const latlng = `${latitude},${longitude}`
    return new Promise<String>((resolve, reject) => {
      this.client.reverseGeocode({latlng}, (err, res) => {
        if (err) {
          reject(err)
        } else {
          const components = res.json.results[0].address_components
          const filtered = components.filter(comp => {
            return comp.types.indexOf('neighborhood') >= 0 ||
                   comp.types.indexOf('political') >= 0
          })
          if (filtered.length >= 1) {
            const name = filtered[0].long_name
            resolve(name)
          } else {
            reject('No name found')
          }
        }
      })
    })
  }
}