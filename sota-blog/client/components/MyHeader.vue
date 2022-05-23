<template>
  <div>
    <section class="flex max-w-full border-solid border-b-[0.1px] drop-shadow">
      <p class="h-[100px] w-[189px] text-[22px] ml-8 leading-[100px]">
        {{ getHeaderName }}
      </p>
      <div class="m-auto relative mr-[47px] menu">
        <p>BLOG</p>
      </div>
    </section>
    <div class="drop-shadow-md" />
  </div>
</template>

<style scoped>
.menu:before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;/*線の上下位置*/
  display: inline-block;
  width: 20px;/*線の長さ*/
  height: 3px;/*線の太さ*/
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: black;/*線の色*/
  border-radius: 2px;
}
</style>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "MyHeader",
  components: {},
  props: ["editMode"],
  data() {
    return {
      hoge1: {
        type: Boolean,
        default: "editMode",
        required: true,
      },
    };
  },
  computed: {
    getHeaderName: function (editMode) {
      console.log(this.editMode);
      if (this.editMode == true) return "editor";
      else return "COMPANY LOGO";
    },
  },
});
</script>
