<template>
  <div class="h-nav">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :background-color="theme.navBg"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
    >
      <el-submenu :index="item.path" v-for="(item) in routeList" :key="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="item2.path" v-for="(item2) in item.children" :key="item2.id">{{item2.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['theme','routeList'])
  },
  async asyncData({$axios}) {
    const res = await $axios('/data/router.json')
    console.log(res)
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.h-nav {
  width: 200px;
  height: 100vh;
  background-color: #03152A !important;
}
</style>