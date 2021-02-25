<template>
  <div class="sun-header">
    <div class="top">
      <div class="sun-header-left">
        <div class="fold-btn" @click="handleFoldClick">
          <i class="el-icon-s-unfold" style="font-size: 24px;"></i>
        </div>
        <div class="current-box">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="item in currentLine" :key="item">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="sun-header-right">
        <img src="https://cdn.eleadmin.com/20200610/avatar.jpg" alt="头像">
        <el-dropdown @command="handleDropClick">
          <span class="el-dropdown-link">
            黄万通<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-key" command="update_password">修改密码</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-switcsun-button" command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="bom">
      <div class="fold-btn">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="box-list">
        <el-tabs v-model="activeName" closable @tab-click="handleClick" @tab-remove="handleRemove">
          <el-tab-pane v-for="item in openRouteList" :key="item.path" :label="item.title" :name="item.path"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="fold-btn">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['openRouteList','currentRoute','currentLine']),
    activeName:{
      get() {
        return this.$store.state.currentPath
      },
      set(val) {
        this.$router.push(val)
      }
    }
  },
  data() {
    return {
      // activeName: 'second'
    }
  },
  created() {
    // this.activeName = this.currentRoute.path
  },
  methods: {
    // 展开和收起
    handleFoldClick() {
      this.$store.commit('M_UPDATE_IS_COLLAPSE')
    },
    // 删除打开的
    handleRemove(path) {
      if(path === this.currentRoute.path) {
        let index = this.openRouteList.findIndex(item=>item.path === path)
        if (index>0) {
          this.$router.replace(this.openRouteList[index-1].path)
        }
      }
      this.$store.commit('M_DELETE_OPEN_ROUTE_LIST',path)
    },
    handleClick(tab, event) {
        console.log(tab, event);
    },
    handleDropClick(command) {
      if (command === 'update_password') {
        // 修改密码
      } else if (command === 'logout') {
        // 退出登录
        this.$router.replace('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sun-header {
  width: 100%;
  height: 100px;
  box-shadow: 0 1px 10px rgba(0,0,0,0.1);
  color: #909399;
  background-color: #fff;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0px 20px;
  }
  .bom {
    display: flex;
    // align-items: center;
    justify-content: space-between;
    border-top: 1px solid #eee;
    width: 100%;
    height: 40px;
    padding: 0px 10px 0px 20px;
    .box-list {
      width: 100%;
    }
  }
}
.sun-header-left {
  display: flex;
  align-items: center;
}
.fold-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
}
.fold-btn:hover {
  background-color: rgba(144, 147, 153, 0.1)
}
.current-box {
  padding-bottom: 3px;
  margin-left: 20px;
}
.sun-header-right {
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 30px;
    border-radius: 50%;
    margin-right: 6px;
  }
}

</style>