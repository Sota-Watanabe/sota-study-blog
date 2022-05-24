<template>
  <div>
    <input
      v-if="isActive"
      type="button"
      :value="text"
      class="w-[93px] h-[51px] text-[18px] bg-[#FFB800] rounded-[18px]"
    />
    <input
      v-else
      type="button"
      :value="text"
      class="w-[93px] h-[51px] bg-transparent text-[18px] border-solid border-black border-[1px] rounded-[18px]"
    />
  </div>
</template>

<style scoped></style>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "MyButton",
  props: ["isActive", "text"],
  data() {
    return {};
  }
});
</script>
