<template>
  <div class="home">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      list:[]
    }
  },
  async asyncData({$axios,store}) {
    const res = await $axios('/data/router.json')
    store.commit('M_UPDATA_ROUTELIST',JSON.parse(JSON.stringify(res.data)))
  },
}
</script>

<style lang="less">
</style>