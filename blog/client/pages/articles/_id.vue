<template>
  <div>
    <my-header />
    <div class="px-4">
      <div
        class="m-auto mt-[49px] pb-[151px] max-w-[800px] flex-col justify-center border-solid border-[#F3F3F4] border-b-[2px]"
      >
        <the-time :time="articleInfo.createdAt" class="mb-2" />
        <h2 class="text-[32px] mb-8">
          {{ articleInfo.title }}
        </h2>
        <div class="flex h-[500px]">
          <img
            :src="articleInfo.thumbnail_path"
            class="blog-detail-img m-auto"
          />
        </div>
        <p class="text-[16px] leading-[28.8px] tracking-wider mt-10">
          {{ articleInfo.body }}
        </p>
      </div>
    </div>
    <prev-next />
    <breadcrumb />
    <my-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import MyFooter from '../../components/MyFooter.vue'
import MyHeader from '../../components/MyHeader.vue'
import PrevNext from '../../components/PrevNext.vue'
import TheTime from '../../components/TheTime.vue'
export default Vue.extend({
  name: 'DetailPage',
  components: { MyHeader, MyFooter, TheTime, Breadcrumb, PrevNext },
  props: {
    articleId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      articleInfo: {
        thumbnail_path: '',
        title: '',
        body: '',
        is_dist: true,
      },
    }
  },

  async created() {
    const ARTICLE_API = `http://localhost:3000/api/articles/${this.$route.params.id}`
    const article = await this.$axios.$get(ARTICLE_API)
    if (!article.article) {
      // errorメソッドでstatusCodeを指定してエラーページへ飛ばす
      this.$nuxt.error({
        statusCode: 404,
      })
    }
    this.articleInfo.title = article.article.title
    this.articleInfo.thumbnail_path = article.article.thumbnail_path
    this.articleInfo.body = article.article.body
    this.articleInfo.is_dist = article.article.is_dist
  },
})
</script>

<style scoped></style>
