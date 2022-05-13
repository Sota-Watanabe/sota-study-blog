<template>
  <div>
    <my-header />
    <h2>BLOG</h2>
    <section class="container">
      <article-card />
      <!-- <article class="grid-item">
        <img src="blog-image.png" alt="記事の画像" title="記事の画像" />
        <div class="detail-text">
          <time>2022-04-04</time>
          <h3>ブログタイトルブログタイトルブログタイトルブログタイトル</h3>
        </div>
      </article>
      <article class="grid-item">
        <img src="blog-image.png" alt="記事の画像" title="記事の画像" />
        <div class="detail-text">
          <time>2022-04-04</time>
          <h3>ブログタイトルブログタイトルブログタイトルブログタイトル</h3>
        </div>
      </article>
      <article class="grid-item">
        <img src="blog-image.png" alt="記事の画像" title="記事の画像" />
        <div class="detail-text">
          <time>2022-04-04</time>
          <h3>ブログタイトルブログタイトルブログタイトルブログタイトル</h3>
        </div>
      </article>
      <article class="grid-item">
        <img src="blog-image.png" alt="記事の画像" title="記事の画像" />
        <div class="detail-text">
          <time>2022-04-04</time>
          <h3>ブログタイトルブログタイトルブログタイトルブログタイトル</h3>
        </div>
      </article>
      <article class="grid-item">
        <img src="blog-image.png" alt="記事の画像" title="記事の画像" />
        <div class="detail-text">
          <time>2022-04-04</time>
          <h3>ブログタイトルブログタイトルブログタイトルブログタイトル</h3>
        </div>
      </article>
      <article class="grid-item">
        <img src="blog-image.png" alt="記事の画像" title="記事の画像" />
        <div class="detail-text">
          <time>2022-04-04</time>
          <h3>ブログタイトルブログタイトルブログタイトルブログタイトル</h3>
        </div>
      </article>
      <article class="grid-item">
        <img src="blog-image.png" alt="記事の画像" title="記事の画像" />
        <div class="detail-text">
          <time>2022-04-04</time>
          <h3>ブログタイトルブログタイトルブログタイトルブログタイトル</h3>
        </div>
      </article>
      <article class="grid-item">
        <img src="blog-image.png" alt="記事の画像" title="記事の画像" />
        <div class="detail-text">
          <time>2022-04-04</time>
          <h3>ブログタイトルブログタイトルブログタイトルブログタイトル</h3>
        </div>
      </article>
      <article class="grid-item">
        <img src="blog-image.png" alt="記事の画像" title="記事の画像" />
        <div class="detail-text">
          <time>2022-04-04</time>
          <h3>ブログタイトルブログタイトルブログタイトルブログタイトル</h3>
        </div>
      </article> -->
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

<script lang="ts">
import Vue from "vue";
import MyHeader from '../components/MyHeader.vue'
import ArticleCard from '../components/ArticleCard.vue'
export default Vue.extend({
  name: "IndexPage",
  components: { MyHeader, ArticleCard },
});
</script>
