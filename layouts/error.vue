<template>
  <div class="sun-exc">
    <div class="sun-exception-img">
      <img src="@/assets/imgs/ic-404.svg" alt="" style="max-width: 320px;">
    </div>
    <div class="sun-exception-content sun-text-left">
      <h1 class="sun-text">404</h1>
      <p class="sun-text-secondary">抱歉，你访问的页面不存在</p>
      <div>
        <el-button type="primary" @click="$router.replace('/')" size="small">返回首页
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exception404',
}
</script>

<style scoped>
.sun-exc {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
}
.sun-text {
  font-size: 72px;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: #515A6E;
}
.sun-text-secondary {
  font-size: 20px;
  margin: 0 0 25px 0;
  color: #808695;
}
</style>