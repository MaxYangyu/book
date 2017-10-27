<template>
  <div class="more">
    <div class="box">
      <router-link :to="{ name: 'Sort', params: {Id: 123 }}">
        <img src="../../static/图层-26@2x.png"/>
        <span>玄幻</span>
        <p>废材小姐姐</p>
      </router-link>
      <a href="http://www.baidu.com">
        <img src="../../static/图层-26@2x.png"/>
        <span>玄幻</span>
        <p>废材小姐姐</p>
      </a>
      <a href="http://www.baidu.com">
        <img src="../../static/图层-26@2x.png"/>
        <span>玄幻</span>
        <p>废材小姐姐</p>
      </a>
      <a href="http://www.baidu.com">
        <img src="../../static/图层-26@2x.png"/>
        <span>玄幻</span>
        <p>废材小姐姐</p>
      </a>
    </div>
    <div class="box even">
      <a href="http://www.baidu.com">
        <img src="../../static/图层-26@2x.png"/>
        <span>玄幻</span>
        <p>废材小姐姐</p>
      </a>
      <a href="http://www.baidu.com">
        <img src="../../static/图层-26@2x.png"/>
        <span>玄幻</span>
        <p>废材小姐姐</p>
      </a>
      <a href="http://www.baidu.com">
        <img src="../../static/图层-26@2x.png"/>
        <span>玄幻</span>
        <p>废材小姐姐</p>
      </a>
      <a href="http://www.baidu.com">
        <img src="../../static/图层-26@2x.png"/>
        <span>玄幻</span>
        <p>废材小姐姐</p>
      </a>

    </div>
  </div>
</template>
<script>

  export default {
    components: {

    }
  }

</script>

<style scoped lang="less">

  .more{
    padding-top: 0.34rem;
    background-color: #fff;
    .box {
      a:nth-child(1){
        margin-left: 0.29rem;
      }
      a {
        display: inline-block;
        position: relative;
        img {
          width: 1.52rem;
          height: 2.04rem;
        }
        span{
          display: inline-block;
          width: 1.52rem;
          height: 2.04rem;
          position: absolute;
          background-color: rgba(0,0,0,0.5);
          text-align: center;
          line-height: 2.04rem;
          font-size:.36rem;
          font-family:PingFangSC-Regular;
          color:rgba(255,255,255,1);
          top:0;
          border-radius: 0.08rem;
        }
        p {
          text-align: left;
          width: 1.49rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: .26rem;
          font-family: PingFangSC-Regular;
          color: rgba(51, 51, 51, 1);
        }
      }

    }
  }



</style>
