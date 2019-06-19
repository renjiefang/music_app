<template>
  <div class="recommend" >
    <scroll class="recommend-content" :data="singList" ref="scroll">
      <div>
      <div class="slider-wrapper" v-if="recommends.length">
          <slider :recommend="recommends" @loadTo="load" ></slider>
      </div>
        <loading v-if="!singList.length" :title="loadtitle"></loading>
      <div class="recommend-list">

        <cube-tab-bar
          :useTransition=false
          :showSlider=true
          v-model="selectedLabel"
          :data="tabs"
          ref="tabBar"
          class="title_active">
         </cube-tab-bar>
        <!--</cube-tab-bar>-->
        <div class="slide_wrapper">
          <cube-slide
            ref="slide"
            :loop="false"
            :initial-index="index"
            :auto-play=false
            :show-dots=false
            :options="slideOptions"
            @change="changePage"
            @scroll="scroll"
            >
          <cube-slide-item>
        <!--<h1 class="list-title">热门单曲推荐</h1>-->
        <ul>
              <li v-for="item in singList" class="item" >
                <div class="icon">
                  <img width="60" height="60" v-lazy="item.imgurl" :key="item.imgurl">
                </div>
                <div class="text">
                  <h2 class="name" v-html="item.creator.name"></h2>
                  <p class="desc" v-html="item.dissname"></p>
                </div>
              </li>
            </ul>
          </cube-slide-item>

            <cube-slide-item>
                <classic></classic>
            </cube-slide-item>
            <cube-slide-item>
              <online></online>
            </cube-slide-item>
          </cube-slide>
        </div>
      </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import {getCommend,getSingerList} from '@/api/recommend.js'
import {ERR_OK} from '@/api/config.js'
import Slider from '@/base/slider'
import Scroll from '@/base/scroll/betterScroll'
import Loading from '@/base/loading/loading'
import Classic from 'components/classic/classic'
import Online from 'components/online/online'

export default {
  name: 'recommend',
   data() {
       return {
         recommends: [],
         singList: [],
         flag: true,
         length: 18,
         loadtitle:'加载中...',
         index: 0,
         tabs: [
           {
           label: '热门单曲推荐'
           },
           {
             label: '经典单曲'
           },
           {
             label: '即将上线单曲'
           }
         ],
         slideOptions: {
           listenScroll: true,
           probeType: 3,
           /* lock y-direction when scrolling horizontally and  vertically at the same time */
           directionLockThreshold: 0
         }
       }
   },
  computed: {
    selectedLabel : {
      get(){
        return this.tabs[this.index].label
      },
      set(newVal) {
        this.index = this.tabs.findIndex( (ele)=> {
          return ele.label === newVal
        })
      }
    }
  },

  created () {
    //注意this指向
    //  setTimeout(() => {
      this._getCommend()
     // },1000)
    // setTimeout( () => {
      this._getSingerList()

    // },1000)


  },

  methods: {
    _getCommend () {
      getCommend().then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
          this.recommends = res.data.slider

        }
      })
    },
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singList = res.data.list
          this.length = res.data.list.length
        }
      })
    },
    load() {
      if(this.flag) {
        this.flag = true
        this.$refs.scroll.refresh()

      }
    },
    changePage(current) {
        this.index = current
    },
    scroll (pos) {
      const x = Math.abs(pos.x)
      const tabItemWidth = this.$refs.tabBar.$el.clientWidth
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
      const deltaX = x / slideScrollerWidth * tabItemWidth
      this.$refs.tabBar.setSliderTransform(deltaX)
    }
  },
  components: {
    Scroll,
    Slider,
    Loading,
    Classic,
    Online
  }

}
</script>

<style lang="scss">
    @import '../../common/css/variable.scss';
    @import '../../common/css/music.scss';
    @import '../../common/css/mixin.scss';
    .recommend {
      position: fixed;
      width: 100%;
      top: 88px;
      bottom: 0;

      .recommend-content {
        height: 100%;
        overflow: hidden;
          .recommend-content > div {
            height: 100%;
          }
      }
        .slider-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
         .recommend-list {
           height: 100%;
         }
          .recommend-list .list-title{
            height:65px;
            line-height:65px;
            text-align:center;
            font-size:$font-size-medium ;
            color:$color-theme;
        }
      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;
      }
    .icon {
      flex: 0 0 60px;
      width: 60px;
      padding-right: 20px;

    }
      img{
        border-radius: 5px;
        box-shadow: 2px 12px 22px  rgba(7,17,27,0.3);

      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $font-size-medium;
      }
      .name {
        margin-bottom: 10px;
        color: $color-text;
      }
      .desc {
        color: $color-text-d;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      li {

        @for $j from 1  through  30 {
          &:nth-of-type(#{$j})  .desc:before {
            @include icon($j);
            font-family: 'iconfont';
            display: inline-block;
            margin-right: 20px;

        }
        }
      }

    }
  .cube-tab_active {
     color: #ffcd32!important;
  }
  .cube-tab-bar {
    height: 50px!important;
  }
  .cube-tab-bar-slider {
    bottom: 8px!important;
    background: linear-gradient(to right,green ,orange , $color-theme );
    left: 5px!important;
  }

</style>
