<template>
  <div
    class="flex justify-between items-center m-auto mt-[40px] mb-[300px] max-w-[401px]"
  >
    <div class="arrow-div">
      <img src="~/assets/arrow-left.png" class="arrow" />
      <p class="nav-p">PREV</p>
    </div>
    <img src="~/assets/center-icon.png" class="w-[18px] h-[18px]" />
    <div class="arrow-div">
      <p class="nav-p">NEXT</p>
      <img src="~/assets/arrow-right.png" class="arrow" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'PrevNext',
})
</script>

<style scoped>
.arrow {
  width: 26px;
  height: 5px;
  margin: 12px;
}
.nav-p {
  font-size: 14px;
  line-height: 29px;
}
.arrow-div {
  display: flex;
  align-content: center;
}
</style>
