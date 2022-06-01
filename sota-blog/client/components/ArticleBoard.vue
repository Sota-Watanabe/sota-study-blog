<template>
  <div class="flex space-between items-center w-full h-[162px]">
    <img
      src="~/assets/blog-detail.png"
      alt="記事の画像"
      title="記事の画像"
      class="h-full blog-image"
    />
    <p class="ml-[35px] flex-grow">{{ title }}</p>
    <the-time class="ml-[39px]" />
    <div class="ml-[102px]">{{ getStatus }}</div>
    <img
      src="~/assets/edit.png"
      alt="編集アイコン"
      title="編集アイコン"
      class="ml-[71px]"
      @click="$router.push(`/edit/articles/${articleId}`)"
    />
    <img
      src="~/assets/trash.png"
      alt="ゴミ箱アイコン"
      title="ゴミ箱アイコン"
      class="ml-[63px] mr-[26px]"
      @click="deleteArticle"
    />
    <div class="drop-shadow-md" />
  </div>
</template>

<script>
import Vue from 'vue'
import TheTime from './TheTime.vue'
export default Vue.extend({
  name: 'ArticleBoard',
  components: { TheTime },
  props: {
    articleId: { type: String, default: '' },
    isPublic: { type: Boolean, default: true },
    title: { type: String, default: '' },
  },
  computed: {
    getStatus: function () {
      if (this.isPublic == true) return '公開'
      else return '非公開'
    },
  },
  methods: {
    async deleteArticle() {
      const ARTICLE_API = `http://localhost:3000/api/articles/${this.articleId}`
      const res = await this.$axios.$delete(ARTICLE_API)
      if (res) {
        // これで良いのか？
        location.reload()
      } else {
        console.log('error')
      }
      return res
    },
  },
})
</script>

<style scoped></style>
