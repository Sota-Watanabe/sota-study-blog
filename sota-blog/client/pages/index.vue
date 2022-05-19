<template>
  <div>
    <my-header />
    <div class="main">
      <h1>BLOG</h1>
      <section class="container">
        <article-card
          v-for="card of cards"
          :key="card.number"
          class="article-card"
        />
      </section>
      <breadcrumb />
      <my-footer />
    </div>
  </div>
</template>

<style scoped>
.main {
  max-width: 1084px;
  margin: 0 auto;
}
.container {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px 32px;
}
.article-card {
  min-width: 30%;
}
h1 {
  margin: 40px;
  width: 125px;
  height: 70px;

  font-family: "Abel";
  font-style: normal;
  /* font-weight: 400; */
  font-size: 58px;
  /* line-height: 1%; */
  /* identical to box height, or 70px */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
}
</style>

<script lang="ts">
import Vue from "vue";
import MyHeader from "../components/MyHeader.vue";
import ArticleCard from "../components/ArticleCard.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import MyFooter from "../components/MyFooter.vue";
export default Vue.extend({
  name: "IndexPage",
  components: { MyHeader, ArticleCard, Breadcrumb, MyFooter },
  data() {
    return {
      cards: [1, 2, 3, 4],
    };
  },
});
</script>
