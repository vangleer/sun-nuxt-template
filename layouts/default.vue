<template>
<el-container class="default-layout">
  <Nav />
  <el-container>
    <el-header :style="{height:'100px',padding:'0px'}"><Header/></el-header>
    <el-main><Nuxt /></el-main>
  </el-container>
</el-container>
  <!-- <div class="default-layout">
    <Nav />
    <div class="h-content">
      <Header/>
      <div>
        <Nuxt />
      </div>
    </div>
  </div> -->
</template>
<script>
import Nav from '../components/Nav.vue'
import Header from '../components/Header.vue'
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['openRouteList','currentRoute'])
  },
  components:{Nav,Header},
  watch:{
    '$route':{
      immediate:true,
      handler:function(to) {
        this.$store.commit('M_UPDATE_CURRENT_ROUTE',to.path)
      }
    }
  }
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
  flex: 1;
  background-color: #f3faf9;
  height: 100vh;
}
.default-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
}
.h-body {
  flex: 1;
  background-color: #f8f8f8;
}
</style>
