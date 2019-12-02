<template>
  <div class="page">
    <img class="egg" src="~@/assets/1.gif" />
    <img src="~@/assets/homebtn.png" class="start" @click="$router.push('/stage')" />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
export default createComponent({
  setup(props, context) {
    return {}
  },
})
</script>

<style lang="less" scoped>
.page {
  background-image: url('~@/assets/bg.png');
  background-size: cover;
  background-position: center;
  .egg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
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
