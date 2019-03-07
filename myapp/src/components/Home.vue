<template>
  <div class="home text-center">
    <div class="box">
      <div class="bg">
        <h1>欢迎来军火市场!</h1>
        <h3>这里有各样格式热血武器,火爆订购中...</h3>
        <button @click="goMenu" class="btn btn-primary btn1">Let's Order.</button>
      </div>
    </div>
    
  
  <h3>历史订单</h3>
  <my-history></my-history>
  <h3>快递信息</h3>
  <my-delivery></my-delivery>
  <!-- 采用路由式渲染组件 -->
  </div>
</template>

<script>
import History from '@/components/about/History';
import Delivery from '@/components/about/Delivery';
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  methods:{
    goMenu(){
      this.$router.push('/menu')
    }
  },
  components:{
    'my-history':History,
    'my-delivery':Delivery
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  background: url('../assets/jun4.jpg');
  width:100%;
  height:700px;
  padding: 10%;
  
}
.bg{
  background: #bbb;
  opacity: .8;
  width: 600px;
  height: 200px;
  margin: 150px auto;
  padding: 20px;
  position: relative;
}
.btn1{
  position:absolute;
  left: 250px;
  top: 132px;
  opacity:0.5;
}
</style>
