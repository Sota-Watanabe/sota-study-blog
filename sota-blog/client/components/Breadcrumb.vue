<template>
  <div class="base">
    <img src="~/assets/home.svg" class="home-icon" />
    <a href="#">TOP</a>
    <img src="~/assets/next-bread.png" class="next-bread" />
    <a href="#">BLOG</a>
  </div>
</template>

<style scoped>
.base {
  display: flex;
  height: 71px;
  align-items: center;
  border: solid;
  border: 1px solid;
  border-color: #f3f3f4;
  border-left: transparent;
  border-right: transparent;
}
.home-icon {
  width: 14px;
  height: 12px;
  margin: 8px;
}
.next-bread {
  width: 6px;
  height: 10px;
  margin: 8px;
}
</style>

<script>
export default {
  name: "Breadcrumb",
  components: {},
  data() {
    return {
      bread: ["TOP", "BLOG"],
    };
  },
};
</script>
