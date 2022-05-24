<template>
  <div>
    <my-header :editMode="true"/>
    <div class="mx-[3%] mt-[68px]">
      <article-board :isPublic="true" class="my-[38px]"/>
      <article-board :isPublic="true" class="my-[38px]"/>
      <article-board :isPublic="true" class="my-[38px]"/>
      <article-board :isPublic="true" class="my-[38px]"/>
      <article-board :isPublic="true" class="my-[38px]"/>
      <article-board :isPublic="true" class="my-[38px]"/>
    </div>
    <my-footer />
  </div>
</template>

<style scoped>
.h-70px {
  height: 70px;
}
.m-w-1084px {
  max-width: 1100px;
}
.h1-font {
  font-size: 58px;
  font-family: "Abel";
}
.article-sec::after{
  content:"";
  display: block;
  width: 340px;
}
</style>

<script lang="ts">
import Vue from "vue";
import MyHeader from "../components/MyHeader.vue";
import ArticleCard from "../components/ArticleCard.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import MyFooter from "../components/MyFooter.vue";
import ArticleBoard from "../components/ArticleBoard.vue";
export default Vue.extend({
  name: "IndexPage",
  components: { MyHeader, ArticleCard, MyFooter, ArticleBoard },
  data() {
    return {
      cards: [1, 2, 3, 4, 5],
    };
  },
});
</script>
