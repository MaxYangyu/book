<template>
  <div class="Sort">
    <div class="title">
      <span class="active">连载中</span>
      <span>已完结</span>
    </div>
  </div>
</template>
<script>
  export default {}

</script>

<style scoped lang="less">

  .Sort {
    background-color: #fff;
    .title {
      line-height: 1.00rem;
      span {
        display: inline-block;
        width: 1.28rem;
        height: 0.48rem;
        line-height: 0.48rem;
        text-align: center;
        font-size: .28rem;
        font-family: STXihei;
        color: #788296;
      }
      span:nth-child(1){
        text-align: center;
      }
      .active{
        color:rgba(255,255,255,1);
        background:linear-gradient(to right,#8111ff,#f60549);
        border-radius: 0.24rem ;
      }
    }
  }

</style>
