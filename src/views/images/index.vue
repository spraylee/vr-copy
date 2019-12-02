<template>
  <div class="page">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><img src="~@/assets/haiyang1.jpg" @click="toStage('1')"/></swiper-slide>
      <swiper-slide><img src="~@/assets/haiyang2.jpg" @click="toStage('1')"/></swiper-slide>
      <swiper-slide><img src="~@/assets/haiyang3.jpg" @click="toStage('1')"/></swiper-slide>
      <template #pagination>
        <div class="swiper-pagination"></div>
      </template>
    </swiper>
    <span class="back p-base">
      <img src="~@/assets/back.png" @click="$router.back()" />
    </span>
    <img class="egg" src="~@/assets/ctips.png" />
    <img src="~@/assets/homebtn.png" class="start" @click="$router.push('/stage')" />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
export default createComponent({
  setup(props, context) {
    const toStage = (tag: string) => {
      console.log(tag)
      context.root.$router.push(`/stage/${tag}`)
    }
    return {
      toStage,
      swiperOption: {
        direction: 'vertical',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
})
</script>

<style lang="less" scoped>
.page {
  // background-image: url('~@/assets/bg.png');
  background-size: cover;
  background-position: center;
  .back {
    position: absolute;
    left: 10%;
    top: 50px;
    transform: translate(-50%, -50%);
    img {
      width: 8vw;
    }
  }
  .swiper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    /deep/ .swiper-pagination {
      position: absolute;
      .swiper-pagination-bullet {
        background-color: #fff;
        width: 12px;
        height: 12px;
        // border: 3px solid transparent;
        margin: 12px 6px;
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background-color: #fdca3d;
        width: 12px;
        height: 12px;
        border: 3px solid #fff;
        margin: 9px 3px;
      }
    }
  }
  .egg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    pointer-events: none;
  }
  .start {
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translate(-50%, -50%);
    width: 35%;
  }
}
</style>
