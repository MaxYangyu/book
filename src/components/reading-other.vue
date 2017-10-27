<template>
  <div class="other">
    <TitleName>
      <span slot="title-name">其他</span>
    </TitleName>
    <ReadingLast></ReadingLast>
  </div>
</template>
<script>
  import TitleName from './title-name.vue'
  import ReadingLast from './reading-last.vue'
  export default {
    components:{
      TitleName,
      ReadingLast,
    }
  }

</script>

<style scoped lang="less">
  .other {
    margin-top: 0.2rem;
    background-color: #fff;
    padding-top: 0.34rem;
    font-size: .30rem;
    font-family: PingFangSC-Medium;
    color: rgba(51, 51, 51, 1);
  }

</style>
