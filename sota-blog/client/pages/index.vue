<template>
  <div>
    <my-header :edit-mode="false" />
    <div class="m-auto m-w-1084px max-w-6xl">
      <h1 class="m-10 h1-font tracking-wider">BLOG</h1>
      <section
        class="flex m-auto flex-wrap gap-x-10 gap-y-8 w-[340px] md:w-[744px] xl:w-full"
      >
        <article-card
          v-for="card of displayCards"
          :key="card.id"
          :article-id="card.id"
          :thumbnail-path="card.thumbnail_path"
          :title="card.title"
          :created-at="card.createdAt"
        />
      </section>
    </div>
    <breadcrumb />
    <my-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MyHeader from '~/components/MyHeader.vue'
import ArticleCard from '~/components/ArticleCard.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import MyFooter from '~/components/MyFooter.vue'
interface Article {
  thumbnailPath: string
  title: string
  body: string
  is_dist: boolean
}

export default Vue.extend({
  name: 'IndexPage',
  components: { MyHeader, ArticleCard, Breadcrumb, MyFooter },
  data(): {
    articles: Array<Article>
  } {
    return {
      articles: [],
    }
  },
  computed: {
    displayCards: function (): Array<Article> {
      const cards = this.articles.filter((article) => {
        return article.is_dist === true
      })
      return cards
    },
  },
  async created() {
    const articles = await this.$axios.$get(
      'http://localhost:3000/api/articles/'
    )
    this.articles = articles.articles
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
