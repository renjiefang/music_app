<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
          <slider :recommend="recommends"></slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
import getCommend from '@/api/recommend.js'
import {ERR_OK} from '@/api/config.js'
import Slider from '@/base/slider'
export default {
  name: 'recommend',
   data() {
       return {
         recommends: []
       }
   },
  created () {
    this._getCommend()
  },
  methods: {
    _getCommend () {
      getCommend().then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
          this.recommends = res.data.slider

        }
      })
    }
  },
  components: {
    Slider
  }

}
</script>

<style lang="scss">
    @import '../../common/css/variable.scss';

    .recommend {
      position: fixed;
      width: 100%;
      top: 88px;
      bottom: 0;

      .recommend-content {
        height: 100%;
        overflow: hidden;
      }
        .slider-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
          .recommend-list .list-title{
            height:65px;
            line-height:65px;
            text-align:center;
            font-size:$font-size-medium ;
            color:$color-theme;
        }

    }

</style>
