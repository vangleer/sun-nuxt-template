<template>
  <div class="h-header">
    <div class="top">
      <div class="h-header-left">
        <div class="fold-btn" @click="handleFoldClick">
          <i class="el-icon-s-unfold" style="font-size: 24px;"></i>
        </div>
        <div class="current-box">
          <span>主页</span>
          <span>/</span>
          <span>扩展组件</span>
          <span>/</span>
          <span>扩展组件</span>
        </div>
      </div>
      <div class="h-header-right">
        <img src="https://cdn.eleadmin.com/20200610/avatar.jpg" alt="头像">
        <el-dropdown @command="handleDropClick">
          <span class="el-dropdown-link">
            黄万通<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-key" command="update_password">修改密码</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-switch-button" command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="bom">
      <div class="fold-btn">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="box-list">
        <el-tabs v-model="activeName" closable @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
          <el-tab-pane label="角色管理" name="third"></el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="fold-btn">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    // 展开和收起
    handleFoldClick() {
      this.$store.commit('M_UPDATE_IS_COLLAPSE')
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
.h-header {
  width: 100%;
  height: 100px;
  box-shadow: 0 1px 10px rgba(0,0,0,0.1);
  color: #909399;
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
.h-header-left {
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
.h-header-right {
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