<template>
  <article class="w-[340px] h-[326px]" @click="link">
    <div class="h-[240px]">
      <img
        :src="thumbnailPath"
        alt="記事の画像"
        title="記事の画像"
        class="blog-image m-auto"
      />
    </div>
    <div class="detail-text">
      <the-time :time="createdAt" class="mb-1" />
      <h3 class="text-[16px] leading-[180%] tracking-[0.03em]">
        {{ title }}
      </h3>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import TheTime from '../components/TheTime.vue'
export default Vue.extend({
  name: 'ArticleBoard',
  components: { TheTime },
  props: {
    articleId: { type: String, default: '' },
    thumbnailPath: { type: String, default: '' },
    title: { type: String, default: '' },
    createdAt: { type: String, default: '' },
  },
  methods: {
    link() {
      this.$router.push(`/articles/${this.articleId}`)
    },
  },
})
</script>
<style scoped></style>
