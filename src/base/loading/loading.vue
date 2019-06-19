<template>
  <div class="loading">
    <img width="24" height="24" src="./load.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../common/css/variable";

  .loading {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    .desc {
      line-height: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
</style>
