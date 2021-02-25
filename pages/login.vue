<template>
  <div class="login">
    <div class="header">
      <div class="sun-left-box">
        <img src="@/assets/imgs/logo.png" alt="">
        <h1 class="sun-text">{{title}}</h1>
      </div>
      <el-button-group>
        <el-button 
          :type="buttonType === index ? 'primary' : 'default'" 
          v-for="(item,index) in buttonList" 
          :key="index"
          @click="buttonType=index"
        >
          {{item}}
        </el-button>
      </el-button-group>
    </div>

    <div class="login-box" :class="[className]">
      <div class="form-item">
        <h2>用户登录</h2>
      </div>
      <div class="form-item">
        <el-input v-model="username" placeholder="请输入用户名" prefix-icon="el-icon-user" />
      </div>
      <div class="form-item">
        <el-input v-model="password" type="password" placeholder="请输入密码" prefix-icon="el-icon-lock" />
      </div>
      <div class="form-item">
        <el-input v-model="code" placeholder="请输入验证码" prefix-icon="el-icon-sell" />
        <img class="code-img" :src="captchaImg" alt="验证码" @click="captchaImgClick">
      </div>
      <div class="form-item">
        <el-button type="primary" :style="{width:'100%'}" @click="handleLogin">登录</el-button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  layout:'login-layout',
  data() {
    return {
      title:'Sun Admin',
      username: 'admin',
      password: '123456',
      code: '',
      buttonType:1,
      buttonList:['居左','居中','居右'],
      classList:['login-box-left','login-box-center','login-box-right'],
      captchaImg: 'https://test.52jzsj.com/Admin/Pub/Login/getVerifyCode?time=' + Math.round(new Date() / 1000)
    }
  },
  computed:{
    className() {
      return this.classList[this.buttonType]
    }
  },
  methods:{
    captchaImgClick () {
      this.captchaImg = 'https://test.52jzsj.com/Admin/Pub/Login/getVerifyCode?time=' + Math.round(new Date() / 1000)
    },
    handleLogin() {
      if(!this.username) return this.$message.error('用户名不能为空')
      if(!this.password) return this.$message.error('密码不能为空')
      if(!this.code) return this.$message.error('验证码不能为空')
      // 提示
      this.$message.success('登录成功')
      // 重置数据
      this.refreshData()
      // 跳转到首页
      this.$router.replace('/dashboard/workplace')
    },
    refreshData() {
      this.username = ''
      this.password = ''
      this.code = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #30c7b4;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  width: 100vw;
  height: 100px;
  background-color: rgba(0,0,0,0.3);
  .sun-text {
    font-size: 28px;
    color: #fff;
    padding-left: 12px;
  }
}
.sun-left-box {
  display: flex;
  align-items: center;
  img {
    width: 60px;
  }
}
.login-box {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  height: 380px;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
  .form-item {
    display: flex;
    align-items: center;
    margin-top: 20px;
    h2 {
      width: 100%;
      font-size: 30px;
      text-align: center;
      margin-bottom: 10px;
    }
  }
  .code-img {
    width: 100px;
  }
}
.login-box-center {
  left: 50%;
  transform: translate(-50%,-50%);
}
.login-box-left {
   left: 10%;
}
.login-box-right {
  right: 10%;
}
</style>