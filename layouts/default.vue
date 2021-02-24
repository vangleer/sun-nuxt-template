<template>
  <div class="default-layout">
    <Nav />
    <div class="h-content">
      <Header/>
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import Header from '../components/Header.vue'
export default {
  components:{Nav,Header}
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.h-content {
  /* margin-left: 200px; */
  flex: 1;
}
.default-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
