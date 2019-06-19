/**
 * @author renjiefang
 * @date  2019-06-12 19:12
 */
import {commonParams, options} from './config'
import jsonp from 'common/js/jsonp.js'
import axios from 'axios'

export  function getCommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export  function getSingerList() {
   const url = '/api/getSingList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq.json',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
      params: data
  }).then( res => {
       return  Promise.resolve(res.data)
  })

}
