/**
 * @author renjiefang
 * @date  2019-06-12 19:12
 */
import {commonParams, options} from './config'
import jsonp from 'common/js/jsonp.js'

export default function getCommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
