<template>
  <div class="base">
    <my-header />
    <div class="outside">
      <div class="main">
        <the-time class="time" />
        <h2>プロダクトにデザインの力を浸透させる方法</h2>
        <img src="~/assets/blog-detail.png" class="blog-detail-img" />
        <p class="contents">
          親譲おやゆずりの無鉄砲むてっぽうで小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰こしを抜ぬかした事がある。なぜそんな無闇むやみをしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談じょうだんに、いくら威張いばっても、そこから飛び降りる事は出来まい。
          弱虫やーい。と囃はやしたからである。小使こづかいに負ぶさって帰って来た時、おやじが大きな眼めをして二階ぐらいから飛び降りて腰を抜かす奴やつがあるかと云いったから、この次は抜かさずに飛んで見せますと答えた。
        </p>
      </div>
    </div>
    <div class="nav-article">
      <div class="arrow-div">
        <img src="~/assets/arrow-left.png" class="arrow-left arrow" />
        <p class="nav-p">PREV</p>
      </div>
      <img src="~/assets/center-icon.png" class="center-icon" />
      <div class="arrow-div">
        <p class="nav-p">NEXT</p>
        <img src="~/assets/arrow-right.png" class="arrow-right arrow" />
      </div>
    </div>
    <breadcrumb />
    <my-footer />
  </div>
</template>

<style scoped>
.outside {
  padding: 0 16px;
}
.main {
  margin: 0 auto;
  display: block;
  flex-flow: column;
  justify-content: center;
  max-width: 800px;
  margin-top: 49px;
  border-bottom: solid 1px;
  border-color: #f3f3f4;
}
.blog-detail-img {
  margin: 0 0px;
}
.time {
  margin-bottom: 8px;
}
h2 {
  font-size: 32px;
  margin-bottom: 32px;
}
.contents {
  display: inline-block;
  font-size: 16px;
  line-height: 28.8px;
  letter-spacing: 0.05em;
  margin-top: 40px;
  margin-bottom: 40px;
}
.nav-article {
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 300px;
  max-width: 401px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.center-icon {
  width: 18px;
  height: 18px;
}
.arrow {
  width: 26px;
  height: 5px;
  margin: 12px;
}
.nav-p {
  font-size: 14px;
  line-height: 29px;
}
.arrow-div {
  display: flex;
  align-content: center;
}
</style>

<script lang="ts">
import Vue from "vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import MyFooter from "../components/MyFooter.vue";
import MyHeader from "../components/MyHeader.vue";
import TheTime from "../components/TheTime.vue";
export default Vue.extend({
  name: "DetailPage",
  components: { MyHeader, MyFooter, TheTime, Breadcrumb },
});
</script>
