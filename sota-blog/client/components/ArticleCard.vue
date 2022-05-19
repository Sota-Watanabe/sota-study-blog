<template>
  <article class="base">
    <img
      src="~/assets/blog-image.png"
      alt="記事の画像"
      title="記事の画像"
      class="blog-image"
    />
    <div class="detail-text">
      <the-time class="time" />
      <h3 class="blog-detail">
        ブログタイトルブログタイトルブログタイトルブログタイトル
      </h3>
    </div>
  </article>
</template>

<style scoped>
.base {
  max-width: 340px;
  height: 326px;
  justify-content: center;
}

.blog-detail {
  font-family: "ABeeZee";
  /* font-style: italic; */
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  /* or 29px */

  letter-spacing: 0.03em;
}
.time {
  margin-bottom: 4px;
}
</style>
<script lang="ts">
import Vue from "vue";
import TheTime from "../components/TheTime.vue";
export default Vue.extend({
  components: { TheTime },
});
</script>
