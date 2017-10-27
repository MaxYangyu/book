<template>
  <div class="recommend">
    <TitleName>
      <span slot="title-name">小编推荐</span>
    </TitleName>
    <Box></Box>
    <p class="btn">
      查看更多
    </p>
  </div>
</template>
<script>
  import Vue from 'vue'
  import TitleName from './title-name.vue'
  import Box from './box-img.vue'

  export default {
    components: {
      TitleName,
      Box,
    },
    data() {
      return {}
    },
    methods: {},
    created: () => {

    }
  }

</script>

<style scoped lang="less">
  .recommend {
    margin-top: 0.2rem;
    background: rgba(255, 255, 255, 1);

    padding-top: 0.34rem;
    font-size: .34rem;
    font-family: PingFangSC-Medium;
    color: rgba(31, 31, 37, 1);

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
