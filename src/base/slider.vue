<template>
  <div class="block">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in recommend" :key="item.id">
        <img :src="item.picUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default {
        name: "slider",
        props: {
           recommend: {
             type: Array
           }
        }
    }
</script>

<style >
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel  .el-carousel__button {
    width: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    display:inline-block;
  }
</style>
