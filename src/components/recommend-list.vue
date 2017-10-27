<template>
  <div class="list-box">
    <TitleName>
      <span slot="title-name">阅读排行</span>
    </TitleName>
    <Top></Top>
    <p class="btn">
      查看更多
    </p>
  </div>
</template>
<script>
  import TitleName from './title-name.vue'
  import Top from './top-list.vue'

  export default {
    components: {
      TitleName,
      Top,
    }
  }

</script>

<style scoped lang="less">
  .list-box {
    margin-top: 0.2rem;
    background: #ffffff;
    padding-top: 0.34rem;
    font-size: .34rem;
    font-family: PingFangSC-Medium;
    color: #1f1f25;
    margin-bottom: 0.2rem;
    .btn {
      border-top: 0.01rem solid rgba(241, 241, 241, 1);
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      font-size: .28rem;
      font-family: PingFangSC-Regular;
      color: rgba(120, 130, 150, 1);
      margin-top: 0.34rem;
    }
  }


</style>
