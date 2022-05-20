<template>
  <article class="max-w-[340px] h-[326px] ">
    <img
      src="~/assets/blog-image.png"
      alt="記事の画像"
      title="記事の画像"
      class="blog-image"
    />
    <div class="detail-text">
      <the-time class="mb-1" />
      <h3 class="text-[16px] leading-[180%] tracking-[0.03em]">
        ブログタイトルブログタイトルブログタイトルブログタイトル
      </h3>
    </div>
  </article>
</template>

<style scoped>
</style>
<script lang="ts">
import Vue from "vue";
import TheTime from "../components/TheTime.vue";
export default Vue.extend({
  components: { TheTime },
});
</script>
