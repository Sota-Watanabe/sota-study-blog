<template>
  <div>
    <my-header :edit-mode="true" />
    <div class="flex flex-col mt-[78px] mx-[13%] max-w-[1063px] pb-[91px]">
      <label
        v-if="result == ''"
        class="w-full h-dammy border-solid border-[1px] border-black text-center line-h-dammy align-center"
      >
        <input ref="file" type="file" class="w-full hidden" @change="upload" />
        no image
      </label>
      <img
        v-else
        class="w-full border-solid border-[1px] border-black"
        :src="result"
      />
      <ul class="mt-[56px]">
        <li class="flex items-center">
          <p class="text-[18px]">キャッチイメージ:</p>
          <label class="ml-[29px]">
            <img src="~/assets/upload.png" class="w-[36px] h-[32px]" />
            <input
              ref="file"
              type="file"
              class="w-full hidden"
              @change="upload"
            />
          </label>
        </li>
        <li class="flex my-[41px]">
          <p class="w-[109px] text-[18px]">タイトル:</p>
          <input
            v-model="articleInfo.title"
            type="text"
            class="w-full border-solid border-[1px] border-black"
          />
        </li>
        <li class="flex">
          <p class="w-[109px] text-[18px]">本文:</p>
          <textarea
            v-model="articleInfo.body"
            type="text"
            class="w-full h-[323px] border-solid border-[1px] border-black"
          />
        </li>
        <li class="flex items-center mt-[43px]">
          <p class="w-[133px] text-[18px]">公開/非公開:</p>
          <my-button
            :is-active="articleInfo.isDist"
            text="公開"
            @click.native="articleInfo.isDist = true"
          />
          <my-button
            :is-active="!articleInfo.isDist"
            text="非公開"
            class="ml-[34px]"
            @click.native="articleInfo.isDist = false"
          />
        </li>
        <li class="flex items-center mt-[43px]">
          <p class="w-[95px] text-[18px]">更新日:</p>
          <the-time />
        </li>
      </ul>
      <div class="flex gap-[37px] mt-[90px]">
        <my-button
          :is-active="false"
          text="保存"
          @click.native="submitArticleInfo"
        />
        <my-button
          :is-active="false"
          text="cancel"
          @click.native="$router.push('/edit/')"
        />
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MyHeader from '~/components/MyHeader.vue'
import MyFooter from '~/components/MyFooter.vue'
import ArticleBoard from '~/components/ArticleBoard.vue'
import PrevNext from '~/components/PrevNext.vue'
import TheTime from '~/components/TheTime.vue'
import MyButton from '~/components/MyButton.vue'
export default Vue.extend({
  name: 'IndexPage',
  components: { MyHeader, MyFooter, ArticleBoard, PrevNext, TheTime, MyButton },
  props: [],
  data(): {
    articleInfo: {
      thumbnailPath: string
      title: string
      body: string
      isDist: boolean
    }
    result: string
    file: Blob | null
  } {
    return {
      articleInfo: {
        thumbnailPath: '',
        title: '',
        body: '',
        isDist: false,
      },
      result: '',
      file: null,
    }
  },
  methods: {
    submitArticleInfo: function () {
      const info = this.articleInfo
      if (info.title != '' && info.body != '') {
        this.postData()
      }
    },
    async postData() {
      const formData = new FormData()
      if (this.file == null) return
      formData.append('file', this.file)
      let config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }
      let res = await this.$axios.$post(
        'http://localhost:3000/upload',
        formData,
        config
      )
      this.articleInfo.thumbnailPath = `http://localhost:3000/uploads/${res.filename}`
      res = await this.$axios.$post(
        'http://localhost:3000/api/articles',
        this.articleInfo
      )
      // エラー処理 未確認
      if (res) {
        this.$router.push(`/articles/${res.article.id}`)
      } else {
        console.log('error')
      }
      return res
    },
    async upload(event: Event) {
      const files = (event.target as HTMLInputElement).files
      if (files == undefined) return
      this.file = files[0]
      const reader = new FileReader()
      reader.onload = (e: ProgressEvent) => {
        const target = e.target as FileReader
        this.result = target.result as string
      }
      if (this.file) {
        // 後で確認
        reader.readAsDataURL(this.file)
      }
      return
    },
  },
})
</script>

<style scoped>
.h-dammy {
  height: 30vw;
}
.line-h-dammy {
  line-height: 30vw;
}
</style>
