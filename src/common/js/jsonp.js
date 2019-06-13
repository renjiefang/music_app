/**
 * @author renjiefang
 * @date  2019-06-13 13:57
 */

import OriginJsonp from 'jsonp'
// option    和后端约定好的callback

export default function jsonp (url, data, option) {
  url += url.indexOf('?') < 0 ? '?' : '&' + param(data)
  return new Promise((resolve, reject) => {
    OriginJsonp(url, option, (error, data) => {
      if (!error) {
        resolve(data)
      } else {
        reject(error)
      }
    })
  })
}

function param (data) {
  let url = ''
  for (let i in data) {
    let value = data[i] !== undefined ? data[i] : ''
    url += `&${i}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
