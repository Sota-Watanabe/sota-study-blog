<template>
  <div>
    <my-header />
    <div class="px-4">
      <div
        class="m-auto mt-[49px] pb-[151px] max-w-[800px] flex-col justify-center border-solid border-[#F3F3F4] border-b-[2px]"
      >
        <the-time class="mb-2" />
        <h2 class="text-[32px] mb-8">
          プロダクトにデザインの力を浸透させる方法
        </h2>
        <img src="~/assets/blog-detail.png" class="blog-detail-img" />
        <p class="text-[16px] leading-[28.8px] tracking-wider mt-10">
          親譲おやゆずりの無鉄砲むてっぽうで小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰こしを抜ぬかした事がある。なぜそんな無闇むやみをしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談じょうだんに、いくら威張いばっても、そこから飛び降りる事は出来まい。
          弱虫やーい。と囃はやしたからである。小使こづかいに負ぶさって帰って来た時、おやじが大きな眼めをして二階ぐらいから飛び降りて腰を抜かす奴やつがあるかと云いったから、この次は抜かさずに飛んで見せますと答えた。
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
import Breadcrumb from '../components/Breadcrumb.vue'
import MyFooter from '../components/MyFooter.vue'
import MyHeader from '../components/MyHeader.vue'
import PrevNext from '../components/PrevNext.vue'
import TheTime from '../components/TheTime.vue'
export default Vue.extend({
  name: 'DetailPage',
  components: { MyHeader, MyFooter, TheTime, Breadcrumb, PrevNext },
})
</script>

<style scoped></style>
