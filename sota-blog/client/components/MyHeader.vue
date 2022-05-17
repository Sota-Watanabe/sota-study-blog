<template>
  <div>
    <section class="container">
      <p class="logo">COMPANY LOGO</p>
      <div class="sidebar">
        <p>BLOG</p>
      </div>
    </section>
    <div class="border" />
  </div>
</template>

<style scoped>
.space {
  display: block;
}

.sidebar {
  margin: auto;
  display: inline-block;
  position: relative;
  margin-right: 47px;
}

.sidebar:before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;/*線の上下位置*/
  display: inline-block;
  width: 20px;/*線の長さ*/
  height: 3px;/*線の太さ*/
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);/*位置調整*/
  background-color: black;/*線の色*/
  border-radius: 2px;/*線の丸み*/
}

.container {
  max-width: 100%;
  display: flex;
}

.logo {
  height: 100px;
  width: 189px;
  font-size: 22px;
  margin-left: 32px;
  line-height: 100px;
}

/* figmaと少々異なる */
/* 後で修正の可能性あり */
.border {
  box-shadow: 0px 2px 3px black;
}

.menu-btn {
  width: 32px;
  height: 43px;
}
</style>
