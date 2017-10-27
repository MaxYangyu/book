<template>
  <mt-swipe :auto="4000" :defaultIndex="0">
    <mt-swipe-item class="slide">
      <a href="http://www.baidu.com">
        <img src="../../static/图层-22@2x.png"/>
      </a>
    </mt-swipe-item>
    <mt-swipe-item class="slide ">
      <img src="../../static/图层-22@2x.png"/>
    </mt-swipe-item>
    <mt-swipe-item class="slide ">
      <img src="../../static/图层-22@2x.png"/>
    </mt-swipe-item>
    <mt-swipe-item class="slide ">
      <img src="../../static/图层-22@2x.png"/>
    </mt-swipe-item>
  </mt-swipe>

</template>

<script>
  import Vue from 'vue';
  import {Swipe, SwipeItem} from 'mint-ui';

  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  export default {
    data() {
      return {}
    },
    methods: {},
    created: () => {

    }
  }

</script>

<style lang="less" scoped>
  .mint-swipe {
    width: 100%;
    height: 3rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .slide {
    img {
      width: 100%;
      height: 3rem;
    }
  }


</style>
