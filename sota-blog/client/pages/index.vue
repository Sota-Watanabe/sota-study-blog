<template>
  <div>
    <my-header />
    <h2>BLOG</h2>
    <section class="container">
      <article-card
        v-for="card of cards"
        :key="card.number"
        class="article-card"
      />
    </section>
    <nav>
      <ol>
        <li><a href="#">TOP</a></li>
        <li><a href="#">BLOG</a></li>
      </ol>
    </nav>
    <footer>
      <h2>COMPANY LOGO</h2>
      <nav>
        <a href="#">BLOG</a>
      </nav>
      <p>© Copyright</p>
    </footer>
  </div>
</template>

<style>
.container {
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1084px;
  margin: 0 auto;
  gap: 40px 32px;
}
.article-card {
  min-width: 30%;
}
</style>

<script lang="ts">
import Vue from "vue";
import MyHeader from "../components/MyHeader.vue";
import ArticleCard from "../components/ArticleCard.vue";
export default Vue.extend({
  name: "IndexPage",
  components: { MyHeader, ArticleCard },
  data() {
    return {
      cards: [1, 2, 3, 4],
    };
  },
});
</script>
