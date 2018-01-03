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
import axios from 'axios'

import { Coordinates } from './models'

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

  getPosition(ipFlag: boolean = true): Promise<Coordinates> {
    return new Promise<Coordinates>((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position => {
            resolve(position.coords)
          }),
          (geolocationError => {
            console.dir(geolocationError)
            this.getIPLocation()
              .then(coordinates => {
                resolve(coordinates)
              })
              .catch(ipLocationError => {
                reject(ipLocationError)
              })
          })
        )
      }
    })
  }

  getIPLocation(): Promise<Coordinates> {
    return new Promise<Coordinates>((resolve, reject) => {
      // Your API key here
      const key = API_KEY.IP_INFO
      const url = `http://ipinfo.io?token=${key}`

      axios.get(url)
        .then(response => {
          const loc = response.data.loc as string
          const [latitude, longitude] = loc.split(',').map(l => parseFloat(l))
          const coords: Coordinates = {
            latitude,
            longitude
          }
          resolve(coords)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getCityName(coords: Coordinates): Promise<String> {
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