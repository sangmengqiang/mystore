<template>
  <div class="history row">
<div class="card col-4" v-for="(item,index) in items" :key="index">
  <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title ">{{item.title}}*{{item.num}}</h4>
    <p class="card-text text-success">{{item.text}}</p>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      items:[
         {imgsrc:require('../../assets/q1.jpg'),title:'步枪',num:'9999',text:'已完成支付'},
         {imgsrc:require('../../assets/q2.jpg'),title:'武直',num:'999',text:'已完成支付'},
         {imgsrc:require('../../assets/q3.jpg'),title:'核弹头',num:'399',text:'已完成支付'}
         ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    widows:100%;
    height: 400px;
  }
</style>
