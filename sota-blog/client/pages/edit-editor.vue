<template>
  <div>
    <my-header :editMode="true" />
    <div class="flex flex-col mt-[78px] mx-[13%] max-w-[1063px]">
      <img src="~/assets/blog-detail.png" class="w-full" />
      <ul class="mt-[56px]">
        <li class="flex items-center">
          <p class="text-[18px]">キャッチイメージ:</p>
          <img src="~/assets/upload.png" class="w-[36px] h-[32px] ml-[29px]" />
        </li>
        <li class="flex my-[41px]">
          <p class="w-[109px] text-[18px]">タイトル:</p>
          <input
            type="text"
            class="w-full border-solid border-[1px] border-black"
          />
        </li>
        <li class="flex">
          <p class="w-[109px] text-[18px]">本文:</p>
          <input
            type="text"
            class="w-full h-[323px] border-solid border-[1px] border-black"
          />
        </li>
        <li class="flex items-center mt-[43px]">
          <p class="w-[133px] text-[18px]">公開/非公開:</p>
          <my-button :isYellow="true" text="公開" />
          <my-button :isYellow="false" text="非公開" />
        </li>
        <li class="flex items-center mt-[43px]">
          <p class="w-[95px] text-[18px]">更新日:</p>
          <the-time />
        </li>
      </ul>
      <div class="flex gap-[37px] mt-[90px] ">
        <my-button :isYellow="false" text="保存" />
        <my-button :isYellow="false" text="非公開" />
      </div>
    </div>
    <my-footer />
  </div>
</template>

<style scoped></style>

<script lang="ts">
import Vue from "vue";
import MyHeader from "../components/MyHeader.vue";
import MyFooter from "../components/MyFooter.vue";
import ArticleBoard from "../components/ArticleBoard.vue";
import PrevNext from "../components/PrevNext.vue";
import TheTime from "../components/TheTime.vue";
import MyButton from "../components/MyButton.vue";
export default Vue.extend({
  name: "IndexPage",
  components: { MyHeader, MyFooter, ArticleBoard, PrevNext, TheTime, MyButton },
});
</script>
