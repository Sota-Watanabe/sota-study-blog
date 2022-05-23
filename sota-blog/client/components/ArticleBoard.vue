<template>
  <div class="flex space-between items-center w-full h-[162px]">
    <img src="~/assets/blog-detail.png" alt="記事の画像" title="記事の画像" class="h-full blog-image" />
    <p class="ml-[35px] flex-grow">ブログタイトルブログタイトルブログタイトルブログタイトルブログタ...</p>
    <the-time class="ml-[39px]"/>
    <div class="ml-[102px]">{{getStatus}}</div>
    <img src="~/assets/edit.png" alt="編集アイコン" title="編集アイコン" class="ml-[71px]" />
    <img src="~/assets/trash.png" alt="ゴミ箱アイコン" title="ゴミ箱アイコン" class="ml-[63px] mr-[26px]" />
    <div class="drop-shadow-md" />
  </div>
</template>

<style scoped>
</style>

<script>
import Vue from "vue";
import TheTime from "./TheTime.vue";
export default Vue.extend({
  name: "Articleboard",
  components: {TheTime},
  props: ["isPublic"],
  data() {
    return {
    };
  },
  computed: {
    getStatus: function () {
      if (this.isPublic == true) return "公開";
      else return "非公開";
    },
  },
});
</script>
