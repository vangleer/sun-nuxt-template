<template>
  <div class="home">
    
  </div> 
</template>

<script>
export default {
  middleware({redirect}) {
    redirect('/dashboard/workplace')
  },
  data() {
    return {
      list:[]
    }
  },
}
</script>

<style lang="less">
</style>