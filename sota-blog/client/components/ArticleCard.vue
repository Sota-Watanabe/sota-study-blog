<template>
  <article class="base">
    <img
      src="~/assets/blog-image.png"
      alt="記事の画像"
      title="記事の画像"
      class="blog-image"
    />
    <div class="detail-text">
      <time class="blog-time">2022-04-04</time>
      <h3 class="blog-detail">
        ブログタイトルブログタイトルブログタイトルブログタイトル
      </h3>
    </div>
  </article>
</template>

<style>
.base {
  max-width: 340px;
  height: 326px;
  justify-content: center;
}
.blog-time {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  /* or 14px */

  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
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
</style>
