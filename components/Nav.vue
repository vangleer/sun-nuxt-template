<template>
  <div class="h-nav">
    <el-menu
      :default-active="currentPath"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      :background-color="theme.navBg"
      :text-color="theme.navTextColor"
      :active-text-color="theme.navTextColor"
      unique-opened
      :collapse-transition="true"
      :collapse="isCollapse"
    >
       <div class="h-nav-top">
        <img src="@/assets/imgs/logo.png" alt="">
        <span class="h-text" v-if="!isCollapse">{{title}}</span>
      </div>
      <el-submenu :index="item.path" v-for="(item) in routeList" :key="item.path">
        <template slot="title">
          <i :class="item.icon" :style="{color: theme.navTextColor}"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="item2.path" v-for="(item2) in item.children" :key="item2.path">
            <i :class="item2.icon" :style="{color: theme.navTextColor}"></i>
            {{item2.title}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      title:'Sun Admin',
      showTitle:true
    }
  },
  computed:{
    ...mapState(['theme','routeList','isCollapse','currentPath']),
  },
  methods: {
    handleSelect(path, indexPath) {
      this.$router.push(path)
    },
  }
}
</script>

<style scoped>
.h-nav {
  width: auto;
  height: 100vh;
  background-color: #03152A !important;
}
.el-menu-item.is-active {
  background-color: #30c7b4 !important
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.h-nav-top {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
}
.h-nav-top span {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  padding-left: 10px;
}
.h-nav-top img {
  width: 45px;
  height: 45px;
}
</style>