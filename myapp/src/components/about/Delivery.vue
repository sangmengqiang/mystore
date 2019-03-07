<template>
  <div class="delivery row">
    <div class="card col-4" v-for="(item,index) in items" :key="index">
      <img class="card-img-top" :src="item.imgSrc" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title ">{{item.title}}</h4>
        <p class="card-text text-success">{{item.text}}</p>
        <button class="btn btn-primary" @click="alert">快递查询</button>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Delivery',
  data () {
    return {
      items:[
        {imgSrc:'../../../static/kuai3.jpg',title:'顺丰速运',text:'您的快递包裹已发送至伊拉克'},
        {imgSrc:'../../../static/kuai2.jpg',title:'UPS',text:'您的快递包裹已发送至俄罗斯'},
        {imgSrc:'../../../static/kuai1.jpg',title:'远洋运输',text:'您的快递包裹已发送至南非'},
      ] 
    }
  },
  
  methods:{
    alert(){
      alert('您的包裹正在火速运输中...')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width: 100%;
    height: 300px;
  }
</style>
