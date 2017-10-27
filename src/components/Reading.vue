<template>
  <div class="reading-list">
    <div class="header">
      <TitleName>
        <span slot="title-name">上次阅读</span>
      </TitleName>
      <ReadingLast></ReadingLast>
    </div>
    <div class="body">
      <Other></Other>
      <p class="btn">
        查看更多
      </p>
    </div>

  </div>
</template>
<script>
  import TitleName from './title-name.vue'
  import ReadingLast from './reading-last.vue'
  import Other from './reading-other.vue'
  export default {
    components:{
      TitleName,
      ReadingLast,
      Other,
    }
  }

</script>

<style scoped lang="less">
  .reading-list{
    font-size:.30rem;
    font-family:PingFangSC-Medium;
    color:rgba(51,51,51,1);
    .header{
      background-color: #fff;
      padding-top: 0.34rem;
    }
    .body{
      margin-top: 0.3rem;
      .btn {
        background-color: #fff;
        border-top: 0.01rem solid rgba(241, 241, 241, 1);
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: .28rem;
        font-family: PingFangSC-Regular;
        color: rgba(120, 130, 150, 1);
      }
    }

  }

</style>
