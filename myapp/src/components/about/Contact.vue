<template>
  <div class="contact">
    <div class="card text-center">
      <div class="card-header">
        <img src="../../assets/qzzx.png" alt="">
      </div>
      <div class="card-body">
        <h5 class="card-title">七子之星(集团)股份有限公司</h5>
        <p class="card-text">从事......</p>
        <router-link to="/contact/address" class="btn btn-primary">地址信息</router-link>
        <router-link to="/contact/person" class="btn btn-primary">法人代表</router-link>
        <router-link to="/contact/tel" class="btn btn-primary">电话热线</router-link>
        <router-view></router-view>
      </div>
      <div class="card-footer text-muted">
        sslhws
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width:50px;
  }
</style>
