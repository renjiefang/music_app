<template>
  <div class="block" >
    <el-carousel trigger="click" style="height:150px!important;" >
      <el-carousel-item v-for="item in recommend" :key="item.id">
        <img :src="item.picUrl" alt="" @load="loadImage" class="needsClass" height="150">
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
        },
      methods: {
          loadImage() {
             this.$emit('loadTo')
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
  /*.el-carousel__item {*/
    /*height:auto!important;*/
    /*overflow: hidden;*/
  /*}*/
  /*.el-carousel__container {*/
    /*height:auto!important;*/
    /*overflow: hidden;*/
  /*}*/

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel  .el-carousel__button {
    width: 20px;
  }

</style>
