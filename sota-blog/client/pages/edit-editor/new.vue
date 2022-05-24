<template>
  <div>
    <my-header :editMode="true" />
    <div class="flex flex-col mt-[78px] mx-[13%] max-w-[1063px] pb-[91px]">
      <label
        class="w-full h-dammy border-solid border-[1px] border-black text-center line-h-dammy align-center"
      >
        <input ref="file" type="file" @change="upload" class="w-full hidden" />
        no image
      </label>
      <img :src="value" />
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
          <textarea
            type="text"
            class="w-full h-[323px] border-solid border-[1px] border-black"
          />
        </li>
        <li class="flex items-center mt-[43px]">
          <p class="w-[133px] text-[18px]">公開/非公開:</p>
          <my-button
            @click.native="isPublic = true"
            :isActive="isPublic"
            text="公開"
          />
          <my-button
            @click.native="isPublic = false"
            :isActive="!isPublic"
            text="非公開"
            class="ml-[34px]"
          />
        </li>
        <li class="flex items-center mt-[43px]">
          <p class="w-[95px] text-[18px]">更新日:</p>
          <the-time />
        </li>
      </ul>
      <div class="flex gap-[37px] mt-[90px]">
        <my-button :isActive="false" text="保存" />
        <my-button :isActive="false" text="非公開" />
      </div>
    </div>
    <my-footer />
  </div>
</template>

<style scoped>
.h-dammy {
  height: 30vw;
}
.line-h-dammy {
  line-height: 30vw;
}
</style>

<script lang="ts">
import Vue from "vue";
import MyHeader from "../../components/MyHeader.vue";
import MyFooter from "../../components/MyFooter.vue";
import ArticleBoard from "../../components/ArticleBoard.vue";
import PrevNext from "../../components/PrevNext.vue";
import TheTime from "../../components/TheTime.vue";
import MyButton from "../../components/MyButton.vue";
export default Vue.extend({
  name: "IndexPage",
  components: { MyHeader, MyFooter, ArticleBoard, PrevNext, TheTime, MyButton },
  props: [],
  data() {
    return {
      isPublic: true,
      counter: 0,
      file: null,
      value: ""
    };
  },
  methods: {
    // https://qiita.com/itoshiki/items/511d58b827f4ce2129fc 参考
    async upload(event: Event) {
      //  if (event.target instanceof HTMLInputElement == false
      // //  event.target == null ||
      // //  event.target.files ==null
      //  ) return
      //  if (event.target == null) return
      const files = (event.target as HTMLInputElement).files;
      if (files == null) return;
      const file = files[0];

      if (this.checkFile(file)) {
        const picture = await this.getBase64(file);
        this.$emit("input", picture);
        console.log(typeof(picture))
        if (typeof(picture) != 'string') return
        this.value = picture;
      }
    },
    getBase64(file: File): Promise<string | ArrayBuffer | null> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    checkFile(file: File) {
      console.log(`file=${file}`)
      let result = true;
      const SIZE_LIMIT = 5000000; // 5MB
      // キャンセルしたら処理中断
      if (!file) {
        result = false;
      }
      // jpeg か png 関連ファイル以外は受付けない
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        result = false;
      }
      // 上限サイズより大きければ受付けない
      if (file.size > SIZE_LIMIT) {
        result = false;
      }
      return result;
    },
  },
});
</script>
