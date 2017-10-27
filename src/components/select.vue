<template>
  <div class="select-info">
    <router-link class='reading' to="/Reading">
      <img src="../../static/正在阅读背景@2x.png" class="bg"/>
      <img src="../../static/clock@2x.png" class="clock"/>
      <span>正在阅读</span>
    </router-link>
    <router-link class='more' to="/More">
      <img src="../../static/更多分类背景@2x.png" class="bg"/>
      <img src="../../static/Open-book@2x.png" class="book"/>
      <span>更多分类</span>
    </router-link>


  </div>
</template>
<script>


</script>

<style scoped lang="less">
  .select-info {
    width: 7.50rem;
    height: 1.72rem;
    background: rgba(255, 255, 255, 1);
    .reading {
      position: relative;
      display: inline-block;
      margin-left: 0.34rem;
      margin-top: 0.08rem;
      .bg {
        width: 3.22rem;
        height: 1.32rem;
      }
      .clock {
        position: absolute;
        width: 0.65rem;
        height: 0.65rem;
        top: 30%;
        left:0.34rem;
      }
      span{
        position: absolute;
        top:.52rem;
        right:.50rem;
        font-size:.32rem;
        font-family:PingFangSC-Medium;
        color:rgba(255,255,255,1);
      }
    }
    .more{
      position: relative;
      display: inline-block;
      margin-right: 0.34rem;
      margin-top: 0.08rem;
      .bg{
        width: 3.22rem;
        height: 1.32rem;
      }
      .book{
        height:.65rem;
        width:.65rem;
        position: absolute;
        top: 30%;
        left: 0.34rem;
      }
      span{
        position: absolute;
        top:.52rem;
        right:.50rem;
        font-size:.32rem;
        font-family:PingFangSC-Medium;
        color:rgba(255,255,255,1);

      }
    }

  }

</style>
