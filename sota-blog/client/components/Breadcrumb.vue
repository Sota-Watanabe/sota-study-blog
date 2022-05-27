<template>
  <div
    class="flex h-[71px] mt-[151px] pl-[12.5%] items-center border-solid border-[1px]"
  >
    <img src="~/assets/home.svg" class="w-3.5 h-3 m-2" />
    <a href="#">TOP</a>
    <img src="~/assets/next-bread.png" class="w-1.5 h-2.5 m-2" />
    <a href="#">BLOG</a>
  </div>
</template>

<script>
export default Vue.extend({
  name: 'BreadCrumb',
  components: {},
  data() {
    return {
      bread: ['TOP', 'BLOG'],
    }
  },
})
</script>

<style scoped></style>
