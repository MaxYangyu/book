<template>
  <div class="title">
    <i></i>
    <slot name="title-name"></slot>
  </div>
</template>
<script>
  export default {}

</script>

<style scoped lang="less">
  .title {

    i {
      display: inline-block;
      width: .08rem;
      height: .34rem;
      background: rgba(246, 5, 73, 1);
      vertical-align: sub;
    }
    span {
      font-weight: 700;
      font-size:.34rem;
      font-family:PingFangSC-Medium;
      color:rgba(31,31,37,1);
      padding-left: 0.26rem;

    }
  }


</style>
