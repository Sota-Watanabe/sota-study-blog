<template>
  <div>
    <my-header :edit-mode="true" />
    <div class="flex flex-col mt-[78px] mx-[13%] max-w-[1063px] pb-[91px]">
      <label
        v-if="value == ''"
        class="w-full h-dammy border-solid border-[1px] border-black text-center line-h-dammy align-center"
      >
        <input ref="file" type="file" class="w-full hidden" @change="upload" />
        no image
      </label>
      <img
        v-else
        class="w-full border-solid border-[1px] border-black"
        :src="value"
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
            :is-active="articleInfo.is_dist"
            text="公開"
            @click.native="articleInfo.is_dist = true"
          />
          <my-button
            :is-active="!articleInfo.is_dist"
            text="非公開"
            class="ml-[34px]"
            @click.native="articleInfo.is_dist = false"
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
    {{ articleInfo }}
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
  data() {
    return {
      articleInfo: {
        thumbnailPath: '',
        title: '',
        body: '',
        is_dist: false,
      },
      value: '',
    }
  },
  async created() {
    console.log('start create')
    const ARTICLE_API = `http://localhost:3000/api/articles/${this.$route.params.id}`
    const article = await this.$axios.$get(ARTICLE_API)
    if (!article.article) {
      // errorメソッドでstatusCodeを指定してエラーページへ飛ばす
      this.$nuxt.error({
        statusCode: 404,
      })
    }
    // ここなんとかする 多分type
    this.articleInfo.title = article.article.title
    this.articleInfo.thumbnailPath = article.article.thumbnail_path
    this.articleInfo.body = article.article.body
    this.articleInfo.is_dist = article.article.is_dist
  },
  methods: {
    submitArticleInfo: function () {
      const info = this.articleInfo
      if (info.title != '' && info.body != '') {
        this.putData()
      }
    },
    async putData() {
      const ARTICLE_API = `http://localhost:3000/api/articles/${this.$route.params.id}`
      const res = await this.$axios.$put(ARTICLE_API, {
        // ここなんとかする 多分type
        thumbnailPath: this.articleInfo.thumbnailPath,
        title: this.articleInfo.title,
        body: this.articleInfo.body,
        isDist: this.articleInfo.is_dist,
      })
      // エラー処理 未確認
      if (res) {
        this.$router.push(`/articles/${res.article.id}`)
      } else {
        console.log('error')
      }
      return res
    },
    // https://qiita.com/itoshiki/items/511d58b827f4ce2129fc 参考
    async upload(event: Event) {
      const files = (event.target as HTMLInputElement).files
      if (files == null) return
      const file = files[0]

      if (this.checkFile(file)) {
        const picture = await this.getBase64(file)
        this.$emit('input', picture)
        if (typeof picture != 'string') return
        this.value = picture
      }
    },
    getBase64(file: File): Promise<string | ArrayBuffer | null> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    },
    checkFile(file: File) {
      console.log(`file=${file}`)
      let result = true
      const SIZE_LIMIT = 5000000 // 5MB
      // キャンセルしたら処理中断
      if (!file) {
        result = false
      }
      // jpeg か png 関連ファイル以外は受付けない
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        result = false
      }
      // 上限サイズより大きければ受付けない
      if (file.size > SIZE_LIMIT) {
        result = false
      }
      return result
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
