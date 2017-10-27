<template>
  <div class="top-list">
    <div class="media">
      <div class="media-left">
        <img src="../../static/图层-26@2x.png"/>
      </div>
      <div class="media-body">
        <p class="book">废柴小姐姐</p>
        <p class="name">作者：<span>上官雨儿</span></p>
        <p class="gray">最新章节：<span>第3444章 大西瓜碎了</span></p>
        <p class="number">383万阅读</p>
      </div>
      <div class="media-right">
        <img src="../../static/1@2x.png"/>
      </div>
    </div>
    <div class="media">
      <div class="media-left">
        <img src="../../static/图层-26@2x.png"/>
      </div>
      <div class="media-body">
        <p class="book">废柴小姐姐</p>
        <p class="name">作者：<span>上官雨儿</span></p>
        <p class="gray">最新章节：<span>第3444章 大西瓜碎了</span></p>
        <p class="number">383万阅读</p>
      </div>
      <div class="media-right">
        <img src="../../static/2@2x.png"/>
      </div>
    </div>
    <div class="media">
      <div class="media-left">
        <img src="../../static/图层-26@2x.png"/>
      </div>
      <div class="media-body">
        <p class="book">废柴小姐姐</p>
        <p class="name">作者：<span>上官雨儿</span></p>
        <p class="gray">最新章节：<span>第3444章 大西瓜碎了</span></p>
        <p class="number">383万阅读</p>
      </div>
      <div class="media-right">
        <img src="../../static/3@2x.png"/>
      </div>
    </div>
    <div class="media">
      <div class="media-left">
        <img src="../../static/图层-26@2x.png"/>
      </div>
      <div class="media-body">
        <p class="book">废柴小姐姐</p>
        <p class="name">作者：<span>上官雨儿</span></p>
        <p class="gray">最新章节：<span>第3444章 大西瓜碎了</span></p>
        <p class="number">383万阅读</p>
      </div>
      <div class="media-right">
        <span>4</span>
      </div>
    </div>

  </div>
</template>
<script>

  export default {}

</script>

<style scoped lang="less">
  @font-face {
    font-family: number-font;
    src: url('../assets/font/HelveticaNeue-BoldCond.otf') format('OpenType');
    font-weight: normal;
    font-style: normal;
  }

  .top-list {
    .media {
      margin-top: 0.34rem;
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
          font-size: .30rem;
          width: 1.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-family: PingFangSC-Medium;
          color: rgba(51, 51, 51, 1);
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
      .media-right {
        display: inline-block;
        float: right;
        img {
          width: 1.18rem;
          height: 1.04rem;
        }
        span {
          display: inline-block;
          font-size: .70rem;
          margin-right: 0.27rem;
          font-family: number-font;
          font-style: italic;
          color: rgba(120, 130, 150, 1);
        }
      }
    }

  }

</style>
