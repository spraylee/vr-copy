<template>
  <div class="page">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><img src="~@/assets/1.png" @click="toStage('1')"/></swiper-slide>
      <swiper-slide><img src="~@/assets/2.png" @click="toStage('2')"/></swiper-slide>
      <swiper-slide><img src="~@/assets/3.png" @click="toStage('3')"/></swiper-slide>
      <swiper-slide><img src="~@/assets/4.png" @click="toStage('4')"/></swiper-slide>
      <div class="swiper-button-prev" slot="button-prev">1</div>
      <div class="swiper-button-next" slot="button-next">2</div>
    </swiper>
    <img class="text" src="~@/assets/text.png" />
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
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
})
</script>

<style lang="less" scoped>
.page {
  background-image: url('~@/assets/bg.png');
  background-size: cover;
  background-position: center;
  .swiper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 150vw;
    img {
      width: 95%;
      transition: all 0.3s;
      margin: 30px 0;
    }
    .swiper-slide-next img {
      transform: scale(1.2);
    }
    .swiper-button-prev {
      transform: translateX(150px);
      z-index: 10000;
    }
    .swiper-button-next {
      transform: translateX(-150px);
      z-index: 10000;
    }
  }
  .text {
    position: absolute;
    left: 50%;
    top: 75%;
    transform: translate(-50%, -50%);
    width: 40%;
  }
}
</style>
