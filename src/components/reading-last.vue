<template>
    <div class="reading-last">
      <div class="media">
        <div class="media-left">
          <img src="../../static/图层-26@2x.png"/>
        </div>
        <div class="media-body">
          <p class="book">废柴小姐姐</p><i>更新</i>
          <p class="name">作者：<span>上官雨儿</span></p>
          <p class="gray">最新章节：<span>第3444章 大西瓜碎了</span></p>
          <p class="number">383万阅读</p>
        </div>
      </div>
    </div>
</template>
<script>
    export default {}

</script>

<style scoped lang="less">
    .reading-list{
      .media {
        margin-top: 0.34rem;
        padding-bottom: 0.34rem;
        .media-left {
          display: inline-block;
          margin-left: 0.34rem;
          img {
            width: 1.52rem;
            height: 2.04rem;
            vertical-align: initial;
          }
        }
        .media-body {
          position: relative;
          display: inline-block;
          margin-left: 0.34rem;
          vertical-align: top;
          width: 4rem;
          height: 2.04rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .book {
            display: inline-block;
            font-size: .30rem;
            width: 1.5rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: PingFangSC-Medium;
            color: rgba(51, 51, 51, 1);
          }
          i{
            display: inline-block;
            width: 0.5rem;
            height: 0.28rem;
            line-height: 0.28rem;
            text-align: center;
            border-radius:0.04rem;
            background:rgba(79,210,162,1);
            font-size:.20rem;
            font-family:PingFangSC-Regular;
            color:rgba(255,255,255,1);
            vertical-align: text-top;
            margin-left: 0.1rem;
          }
          .name {

            margin-top: 0.18rem;
            font-size: .24rem;
            font-family: PingFangSC-Regular;
            color: rgba(120, 130, 150, 1);
            span {
              vertical-align: bottom;
              display: inline-block;
              width: 1.5rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .gray {
            margin-top: 0.18rem;
            font-size: .24rem;
            font-family: PingFangSC-Regular;
            color: rgba(120, 130, 150, 1);
            span {
              vertical-align: bottom;
              display: inline-block;
              width: 2.8rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis
            }
          }
          .number {
            width: 1.5rem;
            height: 0.35rem;
            line-height: 0.35rem;
            text-align: center;
            border: 0.02rem solid rgba(246, 5, 73, 1);
            border-radius: 0.05rem;
            font-size: .20rem;
            font-family: PingFangSC-Regular;
            color: rgba(246, 5, 73, 1);
            position: absolute;
            bottom: 0;
          }
        }

      }
    }

</style>
