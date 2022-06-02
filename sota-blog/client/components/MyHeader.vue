<template>
  <div>
    <section class="flex max-w-full border-solid border-b-[2px] drop-shadow">
      <p class="h-[100px] w-[189px] text-[22px] ml-8 leading-[100px]">
        {{ getHeaderName }}
      </p>
      <div
        v-if="!editMode"
        class="m-auto relative mr-[47px] menu"
        @click="$router.push('/edit')"
      >
        <p>BLOG</p>
      </div>
      <div v-else class="flex items-center m-auto mr-1">
        <img
          src="~/assets/plus.png"
          class="w-[29.1px] h-[29.1px]"
          @click="$router.push('/edit/new')"
        />
        <img
          src="~/assets/home.svg"
          class="w-[41px] h-[35px] mx-[52px]"
          @click="$router.push('/')"
        />
      </div>
    </section>
    <div class="drop-shadow-md" />
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'MyHeader',
  components: {},
  props: { editMode: { type: Boolean, default: false } },
  data() {
    return {}
  },
  computed: {
    getHeaderName: function () {
      if (this.editMode == true) return 'editor'
      else return 'COMPANY LOGO'
    },
  },
})
</script>

<style scoped>
.menu:before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px; /*線の上下位置*/
  display: inline-block;
  width: 20px; /*線の長さ*/
  height: 3px; /*線の太さ*/
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: black; /*線の色*/
  -radius: 2px;
}
</style>
