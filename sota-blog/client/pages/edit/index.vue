<template>
  <div>
    <my-header :edit-mode="true" />
    <div class="mx-[3%] mt-[68px] mb-[91px]">
      <article-board
        v-for="board of articles"
        :key="board.id"
        :title="board.title"
        :is-public="board.is_dist"
        class="my-[38px]"
      />
    </div>
    <prev-next />
    <my-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MyHeader from '~/components/MyHeader.vue'
import MyFooter from '~/components/MyFooter.vue'
import ArticleBoard from '~/components/ArticleBoard.vue'
import PrevNext from '~/components/PrevNext.vue'
export default Vue.extend({
  name: 'IndexPage',
  components: { MyHeader, MyFooter, ArticleBoard, PrevNext },
  data() {
    return {
      articles: [],
    }
  },
  async created() {
    const articles = await this.$axios.$get(
      'http://localhost:3000/api/articles/'
    )
    this.articles = articles.articles
    console.log(this.articles)
  },
})
</script>

<style scoped>
.h-70px {
  height: 70px;
}
.m-w-1084px {
  max-width: 1100px;
}
.h1-font {
  font-size: 58px;
  font-family: 'Abel';
}
.article-sec::after {
  content: '';
  display: block;
  width: 340px;
}
</style>
