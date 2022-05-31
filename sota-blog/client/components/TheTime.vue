<template>
  <time class="text-[12px] leading-[120%] tracking-[0.05em]">{{
    validate
  }}</time>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheTime',
  props: {
    time: { type: String, default: '' },
  },
  computed: {
    validate: function () {
      // あまり汎用性がない
      return this.time.split('T')[0]
    },
  },
})
</script>

<style scoped></style>
